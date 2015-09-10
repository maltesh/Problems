/*
For each element of list to be sorted,total number of elements smaller than this element and
record results in a table.These numbres will indicate positions of the elements in sorted list
*/


var arr = [62,31,84,96,19,47];
var count_arr=[];
for ( k in arr)
{
    count_arr[k]=0;
}

var len = arr.length;
for(var i=0;i<len-1;i++)
{
    for(var j=i+1;j<len;j++)
    {
       // console.log(arr[i] + " ---> " + arr[j]);
        if(arr[i]<arr[j])
        {
            count_arr[j]=count_arr[j]+1;
        }        
        else
        {
     		count_arr[i]=count_arr[i]+1;
        }
    }
}
var t =[];
for(k=0;k<len-1;k++)
{
	t[count_arr[k]]=arr[k];
}
console.log(t);
