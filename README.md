# Group_5_Final_Project

## Deliverable 1

- Team members have drafted their project:
    - Selected Topic-Beer reviews
    - Description of their source data-Predicting review ratings for beer based on the individual components. Components that will be used for analysis are aroma/smell, appearance/look, taste, palate/feel.
    - Questions that they hope to answer-To predict the overall rating based off of the individual category ratings.
- Have created a GitHub Repo that includes
    - A README.md file-done
    - A .gitignore file-done
    - At least one branch for each team member
- Have selected a database engine (Postgres or MongoDB)-Postgres
- An initial list of tables and columns (optional to use an ERD diagram)- columns: overall smell, overall look, overall feel, overall taste.
- Have decided on Machine Learning Model(s). Classifiers vs Regression-Multiple Linear Regression
- Have decided if they will be doing live predictions-No

## Deliverable 2

    1. Machine Learning Model
        a. Preprocessing: Our csv file contains five rows we will be using for our model.
            - review_overall
            - review_aroma
            - review_appearance
            - review_palate
            - review_taste
        All other columns were dropped.

        b. Features: The data in the columns is based off a 0-5 rating with intervals of 0.5 for ten total values.

        c. The feature we want the model to predict (y_train, y_test) for this model is review_overall

    2. Database environment
        CREATE TABLE beer_reviews (
         review_overall DECIMAL NOT NULL,
         review_aroma DECIMAL NOT NULL,
         review_appearance DECIMAL NOT NULL,
         review_palate DECIMAL NOT NULL,
         review_taste DECIMAL NOT NULL
        );

    3. Dashborad
        a. 
        b. HTLM, JS (maybe)