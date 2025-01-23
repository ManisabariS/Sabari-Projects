nums = [-2,1,-3,4,-1,2,1,-5,4] // output max sum =6 (4,-1,2,1)
//let nums = [-2,3,1]
let arr=[]
let index=0
function foo(nums)
{
  let currSum =0
  let maxSum = -Infinity
  for(let i=0;i<nums.length;i++)
  {
    currSum = Math.max(currSum+nums[i],nums[i])
    maxSum = Math.max(currSum,maxSum)
  }
  return maxSum
}

//foo(nums)
 console.log(foo(nums));



//  if(nums[i]<=0  || (currSum+nums[i]) <currSum) // -1,-2,-3...
//        {

//        }
//        else //1,2,3...
//        {
//             currSum = currSum+nums[i]    
//        }
//        sum = Math.max(currSum,sum)