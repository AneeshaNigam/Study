#include<bits/stdc++.h>
using namespace std;
int main(){
    int arr[5]={45,65,32,12,1};
    
    for(int i=1;i<5;i++){
        for(int j=i;j>0;j--){
            if(arr[j-1]>arr[j]) swap(arr[j],arr[j-1]);
        }
    }
    for(int i=0;i<5;i++){
        cout<<arr[i]<<" ";
    }
}