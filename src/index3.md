# 26/09/2025 week14.3 Advance API
# Pick
Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.
# next is code part visit index3.ts file

# Partial
Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
# next is code

# Readonly
When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.
# next part code

# Record
Record let’s you give a cleaner type to objects
# coding part

# Map
maps gives you an even fancier way to deal with objects. Very similar to Maps in C++
# coding part

# Exclude
In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
# next coding part

# Type inference in zod
When using zod, we’re done runtime validation. 
# coding part also it is last topic of week14.3 classes its important study more about this