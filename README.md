# Beer Review Predictor

## Introduction
Imagine yourself wandering the aisles of a liquor store. There are so many options, Ale, Lager, Pale Ale, Indian Pale ale., Doppelbock. How does one pick? How do you ensure your senses will be satiated, flooded with the perfect hints of citrus, hops or wheat. Is your beer selection going to be instagram worthy and earn you the awe and respect of your followers and friends? Or will you be thought of a connoisseur of natty light forever?
Luckily, for you, for our group project, we analyzed reviews from one user at Beeradvocate.com, northyorksammy.  Who, alone  has completed over 5817 reviews, on various kinds of beer. We used his reviews of taste, aroma, appearance, and palate for each beer, to predict what his overall review would be.  By using this tool one should be able to predict review ratings for beer based on the individual components of each beer.

## Preprocessing the Data
The data file of beer reviews contained over 1.5 million beer reviews. This was too many for our models, so we decided to look at the number of reviews that were left by each user in the dataset. One user called “northyorksammy” had 5,817 reviews, which is a much more manageable number. We filtered the dataset to only include reviews by northyorksammy and dropped columns not relevant to our process. The columns we kept include: review_overall, review_aroma, review_appearance, review_palate, review_taste, beer_style, and beer_abv. We also dropped empty rows in the dataset, which left us with 5,346 rows of reviews.

## Results

### Multiple Linear Regression Model
The first model we created was a multiple linear regression model.
This model took the aroma, appearance, palate, taste, and abv columns. The training score for this model was 0.656, and the testing score was 0.662.
The first graph displays the model's predicted values with the difference between the predicted and test values.
This first model has a mean squared error of 0.125, which suggests the model can come close to accurately predicting the overall scores.

In an attempt to improve our model, we examined the weight of each coefficient. We found the palate and the taste had the most significant impacts on the model.
The second graph shows a similar pattern to the first model.
The MSE of our second model was 0.128, again, similar to the previous example.
Both models performed well at predicting the overall score.

### Neural Network Model


**Model Composition**

We set up a neural network model to see how it would compare to the MLR model. 
The model consisted of 2 hidden layers (20 nodes each) with a 'relu' activation function and a sigmoid output layer.
The model was trained on the same data as the MLR but scaled using the sklearn 'StandardScaler' function.

**Results**

The model achieved a MSE of between 7.9 and 8.1 depending on the run. We tried adding 'beer_style' as a feature to see if it would improve the model. 
There were 103 styles so we dropped the styles with less than 100 entries leaving us with 13.
Using the sklearn OneHotEncoder function we converted the data and fed it into the model. Unfortunately the model did not react perceptibly to the new features. 
Altering the epochs, node count, and activation functions did not yield anything better than a 7.9 MSE.<br>
We conclude that a neural network is perhaps overcomplicated for this problem and that a MLR is better suited for this prediction.

## Conclusion
Overall, after many tries and corrections to our code, we found that the Multiple Learning Regression model worked best, and we were able to accurately predict the overall score of each beer. There was also no noticeable difference between the weighted results and the initial results. We would like to thank and tip our glass to  northyorksammy, for his commitment to beer and his many, many reviews.

Cheers!
