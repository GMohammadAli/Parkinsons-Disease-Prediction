from sklearn.ensemble import RandomForestRegressor
import pandas as pd
import pickle

data = pd.read_csv('insurance.csv')

data["sex"] = data["sex"].map({"female": 0, "male": 1})
data["smoker"] = data["smoker"].map({"no": 0, "yes": 1})

df = data.drop(['region'], axis=1)

y = df['expenses'] # dependent variable
X = df[['age', 'sex', 'bmi', 'children', 'smoker']] # independent variable

forest = RandomForestRegressor()
forest.fit(X, y) # fitting the model
pickle.dump(forest, open('model.pkl','wb')) # save the model

# print(forest.predict([[15, 61]]))  # format of input
print(f'score: {forest.predict(X)}')

