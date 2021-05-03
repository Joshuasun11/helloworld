/******************************************************************************

find the word in the string array

*******************************************************************************/
//

#include<iostream>
//#include<string>
//#include<cstring>

using namespace std;
//void display(string);

int main(){
	
	int i = 0;
	int a = 0;
	string slist[] = {"hello", "world", "you", "superem","2"};
	string str;
	//string pick;
    //int count = 0;
	a = sizeof(slist)/sizeof(string);
	//cout<<a<<endl;
	cout<<"please input the word you wanna search: ";
	getline(cin, str);	//string的输入方式。char的方式：cin.get(s,size);

    //cout<<"404";
    cout<<sizeof(slist)<<endl;
    cout<<sizeof(string)<<endl;

	for (int count = 0 ; count<=a; count++)
		{
		    //pick = slist[count];
		 if (str == slist[count])
		 {
		     i = 1;
		     cout<<"we found the word: "<<str<<endl; 
		     break;
		 }
		 
		}
	//display(s);
	
	if(i == 0)
		cout<<"we can't find the word"<<str<<endl;
        
    return 0;
}
/*
void display(string s)
{
    cout << "Entered string is: " << s << endl;
}

*/