
package ui.fileselector;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.appcompat.app.AppCompatActivity;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.nbsp.materialfilepicker.MaterialFilePicker;
import com.nbsp.materialfilepicker.ui.FilePickerActivity;

import java.util.regex.Pattern;

public class RNFileSelectorModule extends ReactContextBaseJavaModule {

  public static final int PERMISSIONS_REQUEST_CODE = 0;
  public static final int FILE_PICKER_REQUEST_CODE = 1;
  private static final String NAME = "RNFileSelectorModule";

  private Callback onDone;
  private Callback onCancel;

  public RNFileSelectorModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNFileSelector";
  }

  @ReactMethod
  public void Show(final ReadableMap props, final Callback onDone, final Callback onCancel) {
    boolean openFilePicker = checkPermissionsAndOpenFilePicker();
    if (openFilePicker) {
      openFilePicker(props, onDone, onCancel);
    }
  }


  private boolean checkPermissionsAndOpenFilePicker() {
    String permission = Manifest.permission.READ_EXTERNAL_STORAGE;

    if (ContextCompat.checkSelfPermission(getCurrentActivity(), permission) != PackageManager.PERMISSION_GRANTED) {
      if (ActivityCompat.shouldShowRequestPermissionRationale(getCurrentActivity(), permission)) {
        showError();
        return false;
      } else {
        ActivityCompat.requestPermissions(getCurrentActivity(), new String[]{permission}, PERMISSIONS_REQUEST_CODE);
        return true;
      }
    }

    return true;
  }

  private void showError() {
    Toast.makeText(getCurrentActivity(), "Allow external storage reading", Toast.LENGTH_SHORT).show();
  }


  private void openFilePicker(final ReadableMap props, final Callback onDone, final Callback onCancel) {
    getReactApplicationContext().addActivityEventListener(new ActivityEventListener());
    MaterialFilePicker picker = new MaterialFilePicker();
    picker = picker.withActivity(getCurrentActivity());
    picker = picker.withRequestCode(1);

    String filter = props.getString("filter");
    boolean filterDirectories = props.getBoolean("filterDirectories");
    String path = props.getString("path");
    boolean hiddenFiles = props.getBoolean("hiddenFiles");
    // boolean closeMenu = props.getBoolean("closeMenu");
    boolean closeMenu = false;
    String title = props.getString("title");

    if (filter.length() > 0) {
      picker = picker.withFilter(Pattern.compile(filter));
    }

    picker = picker.withFilterDirectories(filterDirectories);

    if (path.length() > 0) {
      picker = picker.withRootPath(path);
    }

    picker = picker.withHiddenFiles(hiddenFiles);
    picker = picker.withCloseMenu(closeMenu);

    picker = picker.withTitle(title);

    this.onDone = onDone;
    this.onCancel = onCancel;

    picker.start();
  }

  private class ActivityEventListener implements com.facebook.react.bridge.ActivityEventListener {

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
      if (onCancel == null || onDone == null) {
        return;
      }
      if (requestCode == 1 && resultCode == AppCompatActivity.RESULT_OK) {
        String filePath = data.getStringExtra(FilePickerActivity.RESULT_FILE_PATH);

        if (onDone != null) {
          onDone.invoke(filePath);
        }

        onDone = null;
      } else if (requestCode == 1 && resultCode == AppCompatActivity.RESULT_CANCELED) {
        if (onCancel != null) {
          onCancel.invoke();
        }

        onCancel = null;
      }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
  }
}