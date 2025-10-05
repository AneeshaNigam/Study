#include<bits/stdc++.h>
using namespace std;
int main(){
    int n=7;
    int arr[n]={2,8,5,3,9,4,1};
    int min_=0;
    int minindex=0;
    for(int i=0;i<n;i++){
        minindex=i;
        for(int j=i+1;j<n;j++){
            if(arr[minindex]>arr[j]){
                minindex=j;
            }

        }
        swap(arr[i],arr[minindex]);
    }
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}