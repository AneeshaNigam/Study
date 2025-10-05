#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void BubbleSort(int arr[],int n){
    for(int i=1;i<n;i++){
        for(int i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]) swap(arr[i],arr[i+1]);
        }
    }
}
int main(){
    int n=5;
    int arr[n]={5,3,1,4,2};
    BubbleSort(arr,n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}