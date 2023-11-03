
import json
from flask import Flask, jsonify,request
import pandas as pd
from sklearn import linear_model
import numpy as np
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
@app.route('/get_data', methods=['GET'])
def get_data():
    selectedOptions = request.args.get('data')
    countFeature = request.args.get('countFeature')
    teamSize = request.args.get('teamSize')
    avgExp = request.args.get('avgExp')

    result = {
        "selectedOptions": selectedOptions,
        "countFeature": countFeature,
        "teamSize": teamSize,
        "avgExp": avgExp
    }
    print(request.args)
   
    


    # # file = 'https://aegis4048.github.io/downloads/notebooks/sample_data/unconv_MV_v5.csv'
    # df = pd.read_csv('fp.csv')

    # import pandas as pd
    # import numpy as np
    # import matplotlib.pyplot as plt
    # # import seaborn as sns

    # dataset = pd.read_csv("fp.csv")

    # dataset.head()

    # x = dataset[['Effort', 'Transactions', 'Entities','TeamExp','ManagerExp']]
    # y = dataset['Length']

    # import matplotlib.pyplot as plt
    # from mpl_toolkits.mplot3d import Axes3D

    # # Create a 3D scatter plot
    # fig = plt.figure(figsize=(10, 8))
    # ax = fig.add_subplot(111, projection='3d')

    # # Scatter plot for three features
    # ax.scatter(x['Effort'], x['Transactions'], y, c='b', marker='o', label='Effort vs Transactions vs Length')

    # # Set labels for the axes
    # ax.set_xlabel('Effort')
    # ax.set_ylabel('Transactions')
    # ax.set_zlabel('Length')

    # # Set a title for the plot
    # ax.set_title('3D Scatter Plot for Multilinear Regression')

    # # Show the plot
    # plt.legend(loc='upper right')
    # plt.show()

    # from sklearn.model_selection import train_test_split

    # # Split the data into training and test sets
    # x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.5, random_state=42)

    # # X is your feature matrix (e.g., X = dataset[['Effort', 'Transactions', 'Entities', 'TeamExp', 'ManagerExp']])
    # # y is your target variable (e.g., y = dataset['Length'])

    # # The "test_size" parameter determines the proportion of data to include in the test set (e.g., 20% in this example).
    # # The "random_state" parameter ensures reproducibility by fixing the random seed. You can change it to any integer.

    # from sklearn.linear_model import LinearRegression
    # mlr = LinearRegression()
    # mlr.fit(x_train, y_train)

    # print("Intercept: ", mlr.intercept_)
    # print("Coefficients:")
    # list(zip(x, mlr.coef_))

    # y_pred_mlr= mlr.predict(x_test)
    # #Predicted values
    # print("Prediction for test set: {}".format(y_pred_mlr))

    # mlr_diff = pd.DataFrame({'Actual value': y_test, 'Predicted value': y_pred_mlr})
    # mlr_diff.head()

    # from sklearn import metrics
    # meanAbErr = metrics.mean_absolute_error(y_test, y_pred_mlr)
    # meanSqErr = metrics.mean_squared_error(y_test, y_pred_mlr)
    # rootMeanSqErr = np.sqrt(metrics.mean_squared_error(y_test, y_pred_mlr))
    # print('R squared: {:.2f}'.format(mlr.score(x,y)*100))
    # print('Mean Absolute Error:', meanAbErr)
    # print('Mean Square Error:', meanSqErr)
    # print('Root Mean Square Error:', rootMeanSqErr)

    response = {'message': 'mene data udher pahuchadiya'}
    return jsonify(response)






if __name__ == '__main__':
    app.run(debug=True)

