let str = "abcdefghijklmnopqrstuvwxyz"
let arr =[]
let max = 0

function foo (s)
{
    for(let i=0;i<s.length;i++)
    {
        if(arr.indexOf(s[i])!=-1)
        {
            arr=[]
        }
        arr.push(s[i])
        max = Math.max(max,arr.length)
    }
    
    return [max,arr];
}

console.log(foo(str));