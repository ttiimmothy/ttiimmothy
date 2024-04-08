#import <Foundation/Foundation.h>
#import <iostream>

// Objective-C and C++ code can coexist in this file

// Objective-C class declaration
@interface MyObjectiveCClass : NSObject

// Declare Objective-C properties and methods here

@end

// C++ code can be included in this part
int main() {
  // Your C++ code here
  std::cout << "Hello from C++!" << std::endl;
  
  // Objective-C class instantiation
  MyObjectiveCClass *obj = [[MyObjectiveCClass alloc] init];
  
  // Objective-C method call
  [obj someObjectiveCMethod];
  
  return 0;
}