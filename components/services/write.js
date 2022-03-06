import * as FileSystem from 'expo-file-system';


export const write = (ctx, fname) => {
    let fileUri = FileSystem.documentDirectory + fname;
    FileSystem.writeAsStringAsync(fileUri, ctx, { encoding: FileSystem.EncodingType.UTF8 }).then((res)=>console.log(fileUri)).catch((err)=>console.log("Could not write"))
    console.log("Abc")
    return fileUri;
}