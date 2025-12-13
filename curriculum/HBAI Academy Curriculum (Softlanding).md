# SOFTLANDING PROGRAM: The Roadmap

## 🎯 Program Goal
**From Foundations to Junior Engineer.**
Transform your basic coding and math skills into **production-grade engineering capability**. By the end of this roadmap, you will not just *know* ML concepts—you will be able to *build, deploy, and debug* them in real systems.

---

## 🗺️ Phase 1: The Engineer's Toolkit (Weeks 1-4)
*Build the systems that build the models.*

### 🛠️ Module 1: ML Foundations & Clean Code
**Goal**: Stop writing "notebook scripts" and start writing **software**.

#### 1. Base ML Models from Scratch
*   **Topic**: Linear/Logistic Regression, Gradient Descent, Regularization.
*   **Resources**:
    *   **[StatQuest: Linear Regression](https://www.youtube.com/watch?v=2AQKmw14mHM&list=PLblh5JKOoLUIzaEkCLIUxQFjPIlapw8nU)**
        *   **Why it's important**: You cannot debug a neural net if you don't understand how a single neuron (Linear Regression) learns.
        *   **What to expect**: You will understand "fitting a line" not as magic, but as minimizing a specific error function.
    *   **[StatQuest: Logistic Regression](https://www.youtube.com/watch?v=yIYKR4sgzI8&list=PLblh5JKOoLUKxzEP5HA2d-Li7IJkHfXSe)**
        *   **Why it's important**: The foundation of classification and the sigmoid activation function.
        *   **What to expect**: You will learn how to map continuous math to binary (Yes/No) decisions.

#### 2. Classical ML & Evaluation
*   **Topic**: SVMs, Trees, Overfitting vs. Underfitting.
*   **Resources**:
    *   **[StatQuest: Support Vector Machines](https://www.youtube.com/watch?v=efR1C6CvhmE&list=PLblh5JKOoLUL3IJ4-yor0HzkqDQ3JmJkc)**
        *   **Why it's important**: SVMs teach you about decision boundaries and high-dimensional spaces, a key concept for Deep Learning embeddings later.
        *   **What to expect**: Visual intuition of how computers separate data classes.

#### 3. Professional Engineering Standards
*   **Topic**: Clean Code, Refactoring, Modular Design.
*   **Resources**:
    *   **Book: *Clean Code* (Robert C. Martin), Chapters 1–10**
        *   **Why it's important**: AI code is often messy. Writing clean code distinguishes a "Data Scientist" from an "AI Engineer".
        *   **What to expect**: You will learn to name variables so well you don't need comments, and write functions that do one thing perfectly.

---

## 🧠 Phase 2: Deep Learning & Systems (Weeks 5-12)
*Master the brain of AI and the body of Software.*

### 🕸️ Module 2: Deep Learning Primitives
**Goal**: Implement Neural Networks without high-level APIs first, then master PyTorch.

#### 1. Deep Learning Theory
*   **Topic**: Backpropagation, Optimization, Tuning.
*   **Resources**:
    *   **[Deep Learning Specialization (Andrew Ng)](https://www.youtube.com/watch?v=CS4cs9xVecg&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=1)**
        *   **Why it's important**: This is the "Bible" of Deep Learning. Andrew Ng explains the *intuition* better than anyone.
        *   **What to expect**: You will be able to derive the math for backpropagation on paper.

#### 2. PyTorch Engineering
*   **Topic**: Tensors, Autograd, Training Loops.
*   **Resources**:
    *   **[UvA Deep Learning Tutorials (1-3)](https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial2/Introduction_to_PyTorch.html)**
        *   **Why it's important**: PyTorch is the industry standard. These tutorials are rigorous and code-heavy.
        *   **What to expect**: You will write a training loop from scratch: `optimizer.zero_grad()`, `loss.backward()`, `optimizer.step()`.

### 🌐 Module 3: Systems & Deployment
**Goal**: An unused model is useless. Learn to serve it.

#### 1. Networking & The Internet
*   **Topic**: TCP/IP, DNS, Requests, Ports.
*   **Resources**:
    *   **[Network Direction: Introduction to Networking](https://youtu.be/S7MNX_UD7vY?si=QsDqcc9oKARiMpsH)**
        *   **Why it's important**: When your API fails, is it the code, the firewall, or the DNS? You need to know how data moves.
        *   **What to expect**: You will be able to debug connection errors and understand what "localhost:8000" actually means.

#### 2. Docker & API Serving
*   **Topic**: Containers, FastAPI.
*   **Resources**:
    *   **[FastAPI Tutorial](https://youtu.be/SORiTsvnU28?si=wsiLhTJ66QN_zZH3)**
        *   **Why it's important**: FastAPI is the standard for serving Python ML models.
        *   **What to expect**: You will build a Swagger UI where users can upload an image and get a prediction.
    *   **[Docker 101](https://www.docker.com/101-tutorial/)**
        *   **Why it's important**: "It works on my machine" is not an excuse. Docker makes it work everywhere.
        *   **What to expect**: You will package your entire ML application into a single container image.

---

## 🚀 Phase 3: Specialization Tracks (Weeks 13+)
*Choose your path and build a Capstone.*

### 👁️ Option A: COMPUTER VISION TRACK
**Focus**: Teaching machines to see.

*   **[CS231n: CNNs for Visual Recognition](https://youtube.com/playlist?list=PLkt2uSq6rBVctENoVBg1TpCC7OQi31AlC&si=mzfqzQtahA33kMEO)**
    *   **Why**: The legendary Stanford course. Still the best introduction to CNNs.
    *   **Expect**: Deep understanding of Convolutions, Pooling, and Architecture design.
*   **Capstone**: **YOLO Object Detector**. Train a model to detect custom objects (e.g., workers wearing helmets) and deploy it on a video stream.

### 📊 Option B: DATA SCIENCE TRACK
**Focus**: Extracting truth from noise.

*   **[Business Statistics](https://www.amazon.com/Business-Statistics-Decision-Making-David-Groebner/dp/0134496493)**
    *   **Why**: Data Science is 80% statistics, 20% coding. You must understand significance testing.
    *   **Expect**: Ability to say "A is better than B" with mathematical certainty (p-values).
*   **Capstone**: **End-to-End Customer Churn Predictor**. Clean real data, train a model, explain feature importance (SHAP), and predict who will leave.

### 🗣️ Option C: NLP & LLM TRACK
**Focus**: Understanding language and reasoning.

*   **[Karpathy: Neural Networks Zero to Hero](https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&si=IaLn9SKculhENlak)**
    *   **Why**: He builds GPT from scratch. There is no better way to learn Transformers.
    *   **Expect**: You will write the code for Self-Attention and understand "Tokens".
*   **Capstone**: **RAG (Retrieval Augmented Generation) Bot**. Build a chatbot that answers questions based on a private PDF document collection.

### 🏗️ Option D: SOFTWARE ENGINEERING TRACK
**Focus**: Robust, scalable systems.

*   **[The Twelve-Factor App](https://12factor.net/)**
    *   **Why**: The manifesto for building Software-as-a-Service apps.
    *   **Expect**: Understanding of config, backing services, and stateless processes.
*   **Capstone**: **Microservices Social Platform**. A frontend (React) talking to multiple backends (Auth, Feed, Notifications) via REST/gRPC.
