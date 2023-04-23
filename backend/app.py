from flask import Flask, render_template, request
import pickle

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/predict", methods=['POST'])
def predict():
    age = int(request.form['age'])
    sex = int(request.form['sex'])
    bmi = float(request.form['bmi'])
    children = int(request.form['children'])
    smoker = int(request.form['smoker'])


    prediction = model.predict([[age, sex, bmi, children, smoker]])
    return prediction
    # return render_template('index.html', prediction_text=f' Your Premium Amount is {prediction}')

if __name__ == "__main__":
    app.run()