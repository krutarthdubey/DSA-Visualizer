from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

def bubble_sort(arr):
    steps = []
    a = arr.copy()
    n = len(a)
    for i in range(n):
        for j in range(0, n - i - 1):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
            steps.append(a.copy())
    return steps

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/visualize', methods=['POST'])
def visualize():
    data = request.get_json()
    array = data.get("array", [])
    algo = data.get("algorithm", "bubble")

    if algo == "bubble":
        steps = bubble_sort(array)
    else:
        return jsonify({"error": "Algorithm not implemented yet."})

    return jsonify({"steps": steps})

if __name__ == '__main__':
    app.run(debug=True, port=8080)