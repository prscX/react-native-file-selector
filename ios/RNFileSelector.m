
#import "RNFileSelector.h"

@implementation RNFileSelector

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(Show:(nonnull NSDictionary *)props onDone:(RCTResponseSenderBlock)onDone onCancel:(RCTResponseSenderBlock)onCancel) {
    
    dispatch_async(dispatch_get_main_queue(), ^{
        
        NSString *filter = [props objectForKey: @"filter"];
        NSNumber *filterDirectories = [props objectForKey: @"filterDirectories"];
        NSString *path = [props objectForKey: @"path"];
        NSNumber *hiddenFiles = [props objectForKey: @"hiddenFiles"];
        NSNumber *closeMenu = [props objectForKey: @"closeMenu"];
        NSString *title = [props objectForKey: @"title"];
        NSNumber *editable = [props objectForKey: @"editable"];
        
        NSURL *url = nil;
        if ([path length] > 0) {
            url = [NSURL URLWithString: path];
        }
        
        id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
        FileBrowser *fileBrowser = [[FileBrowser alloc] initWithInitialPath: url allowEditing: [editable boolValue] showCancelButton: [closeMenu boolValue]];
        [fileBrowser setDidSelectFile:^(FBFile * _Nonnull file) {
            onDone(@[[[file filePath] absoluteString]]);
        }];
        
        
        
        [((UINavigationController*) app.window.rootViewController) presentViewController:fileBrowser animated:YES completion:nil];
    });
}

@end
  
