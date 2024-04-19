#include<iostream>

using namespace std;

int main()
{
    /*cout<<"..........WELCOME TO QUIZ.........."<<endl;
    cout<<"Please Follow The Instructions:"<<endl;
    cout<<"Step 1 : There are 10 questions in this Quiz Game"<<endl;
    cout<<"Step 2 : You will get 1 mark for each right answer."<<endl;
    cout<<"Step 3 : There is no negetive marking."<<endl;
    cout<<"Step 4 : Please press s/S to START the game."<<endl;
    cout<<"Step 5 : Please choose any one option"<<endl;*/

    int finalresult=0;
    int playQuiz(void);
    play:
    finalresult = playQuiz();
    cout<<"Your total score is "<<finalresult<<endl;

    if(finalresult>=5)
    {
        cout<<"You are passed."<<endl;
        cout<<"Do you want to play is this Quiz again?"<<endl;
        cout<<"yes or no?"<<endl;
        cout<<"Press y/Y for yes and n/N for no"<<endl;
        char playagain;
        cin>>playagain;
        if(playagain=='y' || playagain=='Y')
        {
            goto play;
        }
        else
        {
            cout<<"Thank you for playing Quiz!"<<endl;
        }
    }
    else
    {
        cout<<"You are failed."<<endl;
        cout<<"Do you want to play this Quiz again?"<<endl;
        cout<<"yes or no?"<<endl;
        cout<<"Press y/Y for yes and n/N for no"<<endl;
        char playagain;
        cin>>playagain;
        if(playagain=='y' || playagain=='Y')
        {
            playQuiz();
        }
        else
        {
            cout<<"Thank you for playing Quiz!"<<endl;
        }
    }
}

int playQuiz()
{
    char c;
    char option; // this is to choose option from mcqs
    playInsideFunction:
    int score=0; // this is to give score
    cout<<"..........WELCOME TO QUIZ.........."<<endl;
    cout<<"Please Follow The Instructions:"<<endl;
    cout<<"Step 1 : There are 10 questions in this Quiz Game"<<endl;
    cout<<"Step 2 : You will get 1 mark for each right answer."<<endl;
    cout<<"Step 3 : There is no negetive marking."<<endl;
    cout<<"Step 4 : Please press s/S to START the game."<<endl;
    cout<<"Step 5 : Please choose any one option"<<endl;
    cout<<"Step 6 : If your total score is >=5 , you will pass"<<endl;
    cin>>c; //input to start the Quiz
    if(c=='s' || c=='S')
    {
        //questions start from here//
        cout<<"Let's start"<<endl;
        cout<<"Q1. What is the capital of India?"<<endl;          //1st question
        cout<<"(a)Delhi (b)Gujrat (c)Bangladesh (d)Kolkata"<<endl;
        cin>>option;
        if(option=='a' || option=='A')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q2. Who is the Prime Minister of India?"<<endl;         //2nd question
        cout<<"(a)Narendra Modi (b)Mamata Banerjee (c)Arvind Kejriwal (d)Arik Mukherjee"<<endl;
        cin>>option;
        if(option=='a' || option=='A')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q3. Which is our national bird?"<<endl;        //3rd question
        cout<<"(a)Sparrow (b)Peacock (c)Hen (d)Parrot"<<endl;
        cin>>option;
        if(option=='b' || option=='B')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q4. Which is our national flower?"<<endl;   //4th question
        cout<<"(a)Lotus (b)Rose (c)Sunflower (d)Mogra"<<endl;
        cin>>option;
        if(option=='a' || option=='A')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q5. Who is the Chief Minister of India?"<<endl;        //5th question
        cout<<"(a)Kejriwal (b)Abhishek (c)Mamata Banerjee (d)Netaji Subhas"<<endl;
        cin>>option;
        if(option=='c' || option=='C')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q6. Which is our national animal?"<<endl;    //6th question
        cout<<"(a)Tiger (b)Gorila (c)Panda (d)Monkey"<<endl;
        cin>>option;
        if(option=='a' || option=='A')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q7. Who is called Captain Cool?"<<endl;        //7th question
        cout<<"(a)Mangal Pandey (b)Sourav Ganguly (c)Ravindra Jadeja (d)M S Dhoni"<<endl;
        cin>>option;
        if(option=='d' || option=='D')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q8. Who is called Biswa KObi?"<<endl;     //8th question
        cout<<"(a)Rabindranath (b)Khudiram (c)Nazrul (d)none"<<endl;
        cin>>option;
        if(option=='a' || option=='A')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q9. Which is the independence day of India?"<<endl;   //9th question
        cout<<"(a)15th August (b)15th November (c)15th July (d)15th May"<<endl;
        cin>>option;
        if(option=='a' || option=='A')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        cout<<"Q10. Which colour is the sign of peace?"<<endl;  //10th question
        cout<<"(a)Red (b)Black (c)White (d)Green"<<endl;
        cin>>option;
        if(option=='c' || option=='C')
        {
            score=score+1;
        }
        else
        {
            score=score+0;
        }

        //10 question finished//
    }
    else
    {
       cout<<"You have entered wrong character. Please enter s/S to START the quiz"<<endl;
       goto playInsideFunction;
    }
    return score;

}

