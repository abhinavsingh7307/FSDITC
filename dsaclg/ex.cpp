#include <iostream>
#include <iomanip>   
using namespace std;

int main() {
    int n,x,res;
    res=n*x;
    cin>>n>>x;
    if(res%100000>0&&res%100000<11) cout<<"yes";
    else cout<<"no"; }

