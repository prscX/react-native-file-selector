
Pod::Spec.new do |s|
  s.name         = "RNFileSelector"
  s.version      = "1.0.0"
  s.summary      = "RNFileSelector"
  s.description  = <<-DESC
                  RNFileSelector
                   DESC
  s.homepage     = "https://github.com/prscX/react-native-file-selector"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNFileSelector.git", :tag => "master" }
  s.source_files  = "RNFileSelector/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
