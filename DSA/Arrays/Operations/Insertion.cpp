#include<iostream>
using namespace std;
int main(){
    int arr[7]={1,2,3,4,5};
    for(int i=0;i<5;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    //insert at specific index
    int pos=2, x=10;
    for(int i=5;i>pos;i--){
        arr[i]=arr[i-1];
    }
    arr[pos]=10;
    for(int i=0;i<6;i++){
        cout<<arr[i]<<" ";
    }
    //insert at starting
    for(int i=6;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=x;
    cout<<endl;
    for(int i=0;i<7;i++){
        cout<<arr[i]<<" ";
    }
}