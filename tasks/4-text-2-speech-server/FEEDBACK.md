# Golem JS Preview Program Feedback Form

## Introduction
Thank you for taking the time to complete this Golem JS Preview Program task! 
We appreciate your effort in helping us gather valuable feedback and suggestions on how to improve the Golem Network. 
Please fill out the following form to provide your feedback and estimated completion times for each task step.

## Task: #4 - Text2Speech Server

### Estimated completion time:
| Task Step                                                             | Completion Time (in minutes) |
|-----------------------------------------------------------------------|------------------------------|
| Create a script that will start HTTP server on port 3000              |      10                      |
| Create a `/tts` endpoint that accepts `q` query param with input text |      10                      |
| Schedule task with received text to be converted on Golem Network     |      150-180                 |
| Scale number of contracted providers as more requests are received    |      60                      |

### Feedback:
Please provide any feedback you have regarding each task step below:

#### Step 1: Create a script that will start HTTP server on port 3000
This is a simple step for me to do because I created a HTTP node server which is very simple task for javascript developer.

#### Step 2: Create a `/tts` endpoint that accepts `q` query param with input text
I created a get route which takes query parameter is the url and then call the espeak command in the task executor.

#### Step 3: Schedule task with received text to be converted on Golem Network
It taks 5-6 second to run the task and convert the text into speech. I did not get much difficulty because the documentation is well written in step by step formate. Only one thing I want to mentioned that I get a error message which is (ERROR: Unable to collect invoices. Error: socket hang up) but everythings work fine and I was able to completed the task.

#### Step 4: Scale number of contracted providers as more requests are received
When I call the get request from postman many times in a single run, the parallel call execute successfully and it was too fast or concorrent. I got the all the speech which I call in a single click.
But one catch is there, that if I genrate same speech file name(mp3) again which is already in the output folder then it doesn't work.It pauses and stuck its execution, may be it happen in my machine not sure about others.


## General feedback:
Is there anything else you'd like to share about your experience 
completing this task or using the Golem Network in general? 
In my exerience documentation in the best for me because of best explanation. It's explanation made everyting easy for me. I did not get even a single error when I was excecuting the steps and gentating the api and hash key. 
If anyone will ask me anythink like golem work I will highly recommend golem networks. I will also use golem services in future.

### Suggestions for Improvement
Api refrences are not completed I think if it will complete may be better for the developers.
And I think everything looks perfect for me.Thanks for Golem networks for such a greate work.

Thank you for your feedback and for contributing to the Golem Network!
