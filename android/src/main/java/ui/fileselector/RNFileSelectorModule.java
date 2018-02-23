
package ui.fileselector;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.nbsp.materialfilepicker.MaterialFilePicker;
import com.nbsp.materialfilepicker.ui.FilePickerActivity;

import java.util.regex.Pattern;

public class RNFileSelectorModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public static final int PERMISSIONS_REQUEST_CODE = 0;
  public static final int FILE_PICKER_REQUEST_CODE = 1;

  public RNFileSelectorModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNFileSelector";
  }

  @ReactMethod
  public void Show() {
    checkPermissionsAndOpenFilePicker();
  }


  private void checkPermissionsAndOpenFilePicker() {
    String permission = Manifest.permission.READ_EXTERNAL_STORAGE;

    if (ContextCompat.checkSelfPermission(reactContext.getCurrentActivity(), permission) != PackageManager.PERMISSION_GRANTED) {
      if (ActivityCompat.shouldShowRequestPermissionRationale(reactContext.getCurrentActivity(), permission)) {
        showError();
      } else {
        ActivityCompat.requestPermissions(reactContext.getCurrentActivity(), new String[]{permission}, PERMISSIONS_REQUEST_CODE);
      }
    } else {
      openFilePicker();
    }
  }

  private void showError() {
    Toast.makeText(reactContext.getCurrentActivity(), "Allow external storage reading", Toast.LENGTH_SHORT).show();
  }


  private void openFilePicker() {
    new MaterialFilePicker()
            .withActivity(reactContext.getCurrentActivity())
            .withRequestCode(FILE_PICKER_REQUEST_CODE)
            .withHiddenFiles(true)
            .withTitle("Sample title")
            .start();
//    Intent intent = new Intent(reactContext.getCurrentActivity(), FilePickerActivity.class);
//    intent.putExtra(FilePickerActivity.ARG_FILTER, Pattern.compile(".*\\.txt$"));
//    intent.putExtra(FilePickerActivity.ARG_DIRECTORIES_FILTER, true);
//    intent.putExtra(FilePickerActivity.ARG_SHOW_HIDDEN, true);
//    reactContext.getCurrentActivity().startActivity(intent);
  }
}