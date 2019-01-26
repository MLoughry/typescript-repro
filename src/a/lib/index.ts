// If foo.ts exists with its import, then attempting to auto-import `bar`
//  will prompt you to import from 'obj/b/lib'
// If foo.ts or its import are deleted, no auto-import suggestions are found
console.log(bar);