
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
        id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
        FileBrowser *fileBrowser = [[FileBrowser alloc] init];
        
        [((UINavigationController*) app.window.rootViewController) presentViewController:fileBrowser animated:YES completion:nil];
    });
}

@end
  
