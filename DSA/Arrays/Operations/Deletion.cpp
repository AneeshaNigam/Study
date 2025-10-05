#include<iostream>
using namespace std;
int main(){
    int n=5;
    int arr[10]={1,2,3,4,5};
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    //Deleting from a specific position in the array
    int pos=2;
    arr[pos]=0;//[1,2,0,4,5]
    for(int i=pos;i<n-1;i++){
        arr[i]=arr[i+1];
    }
    n--;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    //Delete from start
    arr[0]=0;
    for(int i=0;i<n-1;i++){
        arr[i]=arr[i+1];
    }
    n--;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}