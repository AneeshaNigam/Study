#include<iostream>
using namespace std;
//Binary Search using Recursion
int recBinary(){

}
int main(){
    int n=5;
    int arr[n]={1,2,3,4,5};
    int x=3;
    //Linear Search
    for(int i=0;i<n;i++){
        if(arr[i]==x) cout<< i<<" from Linear search"<<endl;
    }
    //Binary search
    int low=0,high=n-1;
    while(low<=high){
        int mid=low+(high-low)/2;
        if(arr[mid]<x){
            high=mid-1;
        }
        else if(arr[mid]>x){
            low=mid+1;
        }else{
            cout<<mid<<" from Binary search iterative";
            break;
    }
   }
 return 0;
}