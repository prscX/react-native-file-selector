using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace File.Selector.RNFileSelector
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNFileSelectorModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNFileSelectorModule"/>.
        /// </summary>
        internal RNFileSelectorModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNFileSelector";
            }
        }
    }
}
