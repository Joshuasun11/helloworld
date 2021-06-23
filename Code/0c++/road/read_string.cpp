/******************************************************************************

find the word in the string array
find the word in a opened txt file.

*******************************************************************************/
//

#include<iostream>
#include<string>
#include<cstring>
//#include<fstream>
using namespace std;
//void display(string);

int main(){
	
	int i = 0;
    int a = 0;
	string slist[] = {"hello", "world", "you", "superem","2"," ","wenchao sun"};

	string s;
	//string pick;
   //int count = 0;
	a = sizeof(slist)/sizeof(string);//求slist的元素个数
	
    //cout<<a<<endl;
	cout<<"please input the word you wanna search: ";
	getline(cin, s);	//string的输入方式。char的方式：cin.get(s,size);

	for (int count = 0 ; count<=a; count++)
		{
		    //pick = slist[count];
		 if (s == slist[count])
		 {
		     i = 1;    //set flag for not finding the word. 
		     cout<<"we found the word: "<<s<<endl; 
		     break;
		 }
		}
	//display(s);
	if(i == 0)
		cout<<"we can't find the word: "<<s<<endl;
    return 0;
}
/*
void display(string s)
{
    cout << "Entered string is: " << s << endl;
}
*/
function func()



