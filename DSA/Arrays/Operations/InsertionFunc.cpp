#include<iostream>
using namespace std;
void insertatmiddle(int &n,int arr[],int pos,int val){
    for (int i = n; i >pos; i--)
    {
        arr[i]=arr[i-1];
    }
    arr[pos]=val;
    n++;
    
}
int main(){
    int arr[6]={1,2,3,4,5};
    int n=5;
    insertatmiddle(n,arr,2,10);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}