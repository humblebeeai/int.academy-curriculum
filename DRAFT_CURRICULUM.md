# Draft curriculum review and release

The proposed curriculum lives in `draft_docs/` and is served at `/draft` by the
`draft` documentation plugin. Current and dated curricula continue using the
`default` plugin. Draft is editable, public after deployment, marked noindex,
and excluded from sitemap and dated-snapshot retention.

## Source to page checklist

Source documents supplied for this revision:

- Engineering Fundamentals.docx
- Soft Landing — Core Systems _ Student Guide.docx

| Source section | Draft destination | Review focus |
| --- | --- | --- |
| EF purpose, goals, outcomes, prerequisites | Engineering Fundamentals introduction | Python/algebra/English readiness; NumPy before linear algebra |
| Terminal, environment setup, Git, debugging, algorithms | Terminal & Algorithmic Basics | Five named sections; all 19 terminal lessons and full four-week HackerRank kit |
| Linear algebra | Math for AI — Linear algebra | Five units; four notebooks; NumPy prerequisite; no integrated EF project |
| Core statistics | Math for AI — Probability & statistics | Units 1–5 and 7–12; 80% on every unit test; separate Academy verification |
| Excluded study design | Math for AI — Probability & statistics | Unit 6 excluded; no mandatory full-course challenge |
| NumPy, Pandas, SQL, EDA | Data Foundations | Four named sections; practical outputs and interpretation |
| Five EF extensions plus advanced inference | Six Elective sibling modules in Engineering Fundamentals | Prerequisites, assigned resources, practice, evidence; exactly two required; inference Units 13–16 together form one elective |
| Core purpose and prerequisites | Soft Landing and Core Systems introductions | Equivalent direct entry; five grouped modules cover all six guide requirements |
| R1 | Software Engineering for AI | Project structure, tests, collaboration, verified AI-assisted work |
| R2 and R3 | Applied ML & Deep Learning | Separate R2/R3 outcomes and exercises; derivatives preparation before R3 |
| R4 | LLM Applications | Structured outputs, context, evaluation, failure handling |
| R5 | Systems, Networking & Data | HTTP/DNS, Linux, SSH, troubleshooting, persistence |
| R6 | APIs, Containers & Deployment | FastAPI, Docker, automated tests, deployment |
| E1–E5 | Five Elective sibling modules in Core Systems | Exactly two; separate evidence for each; prerequisites retained |
| Integrated project, learning approach, completion | Integrated Project & Handover | Baseline, evaluation, persistence, deployment, review revision; five completion dimensions; responsible AI use; access alternatives |
| Existing specializations | Copied specialization pages | Requirements unchanged; local links use `/draft` |

## Draft presentation

The Draft uses existing artwork for Math for AI, Data Foundations, and all five required Core Systems modules. Illustrations retain their full composition, descriptive alt text, and intrinsic dimensions. Terminal, electives, and handover use topic icons. Required modules have three practical outcome cards and section/resource shortcuts. Stage overviews present required modules and electives as clickable cards; both stages still require exactly two electives.

Draft layout styles are scoped through CSS Modules. Resource cards opt into full descriptions so assigned scope and access notes remain visible; Current and historical resource cards retain their original behavior. Existing resource URLs, assessments, and compatibility routes remain unchanged. Responsive visual review at 390px, 768px, and 1440px remains part of the pre-merge review.

## Revisions made beyond the guides

- Engineering Fundamentals has three required modules and requires exactly two electives, as requested during review. Linear algebra and probability/statistics are combined in Math for AI. This elective requirement supersedes the source guide’s extension classification.
- Numbered modules, short sidebar labels, stage return links, and section/resource jump links provide a clear learning path. Long grouped pages show a short table of contents; stage categories collapse when not in use.
- Learner-facing wording follows the previous curriculum’s practical outcomes and direct instructions, while retaining the revised guide’s scope and assessments.

- Added a required Python environment exercise before dependent notebooks and
  scripts: isolated environment, dependencies, kernel selection, recreation,
  and an import-failure diagnosis. R1 still introduces uv project management.
- Added a derivatives preparation section before R3 within Applied ML & Deep Learning. Derivatives are no longer required at
  stage entry. Practice covers finite differences, gradient direction, and a
  learning-rate failure; a complete calculus course is not required.
- Specified the four linear algebra notebook evidence areas without introducing
  an integrated EF project.
- Added explicit submission and review checks. Statistics retains its numeric
  threshold; other modules require all stated competencies rather than a new
  aggregate score. Incomplete evidence is revised after feedback.
- Preserved advanced algorithm requirements and Unit 6 exclusion; rebalancing
  either is outside this revision.
- Marked source hour estimates provisional. Other workloads remain pending
  pilot. No new overall total or cohort calendar is asserted.
- Retained former Core Systems routes as unlisted compatibility pages. Required
  curriculum navigation goes to the new modules.

## Resource audit

The Word hyperlink targets are preserved, except direct GitHub Skills course
links replace the course catalog, the Andrew Ng resource links directly to
its lecture source, and the StatQuest model topics have direct playlist/video links. Added setup references use Python and JupyterLab
documentation. The derivatives bridge uses selected Khan Academy calculus.

Khan Academy's Statistics and Probability course must be selected rather than
AP Statistics. Unit 15 and Unit 16 are present in the provider's current index;
follow the topic names if numbering changes. Unit test scores and Academy
verification remain separate evidence. External providers can change content,
login requirements, pricing, or model availability; review the assigned subset
before using this curriculum with a cohort. Paid DataCamp/book access
is identified in the relevant elective module. No resource-completion certificate alone
substitutes for the required practical evidence.

## Initial publication

1. Review this change register and the source-to-page checklist in one PR.
2. Run `npm run typecheck`, `npm run build`, and `npm run draft:check`.
3. Inspect desktop/mobile Draft navigation, banners, overview, module lists,
   and a copied specialization. Check Current and a dated snapshot too.
4. Merge after review. Publish Docs deploys changes to Draft content, config,
   sidebar, and theme. No package tag or curriculum snapshot is needed.
5. Verify `/draft` on the deployed site. Keep editing Draft during feedback;
   do not silently replace Current.

The current production workflow publishes to GitHub Pages. A Wrangler static
assets config also exists; this change uses the existing Publish Docs workflow
and does not change hosting infrastructure.

## Later promotion

Promotion is a separate reviewed change. First archive the outgoing Current
curriculum with Publish Curriculum Version from main, using the actual
publication date, then explicitly run Publish Docs to publish that archive.
Do not rely on a push made by GITHUB_TOKEN to trigger another workflow.

Migrate the approved Draft content to `docs/`, update README and homepage
summaries, preserve compatibility URLs, and replace the Draft plugin with
redirects from each `/draft` URL to its corresponding `/docs` URL. Remove the
Draft menu link and banner support. Validate redirects and existing historical
version navigation before merging. Publish a new dated snapshot of the revised
curriculum after promotion and explicitly deploy it. Never edit an existing
published snapshot to incorporate the Draft.

## Clickable resource checklist

Each row corresponds to a rendered resource card. Scope and access notes appear beside the link on its module page. Compatibility pages are unlisted; electives are direct siblings of their stage’s required modules. Both stages require exactly two electives.

| Module | Resource | Assigned scope and access |
| --- | --- | --- |
| [Advanced Statistical Inference](/draft/engineering-fundamentals/advanced-statistical-inference) | [Khan Academy Statistics and Probability](https://www.khanacademy.org/math/statistics-probability) | Elective resource. Complete Units 13–16 together, pass every unit test with at least 80%, and pass the separate elective verification. |
| [Data Foundations](/draft/engineering-fundamentals/data-manipulation) | [NumPy: The Absolute Basics for Beginners](https://numpy.org/doc/stable/user/absolute_beginners.html) | Required. Complete this introductory guide, covering array creation, shapes, indexing, and basic operations before the linear algebra notebooks. |
| [Data Foundations](/draft/engineering-fundamentals/data-manipulation) | [CodeSignal: NumPy Basics](https://codesignal.com/learn/courses/numpy-basics) | Required. Complete the course and its practice exercises; demonstrate filtering, reshaping, transforming, and summarizing multidimensional arrays. |
| [Data Foundations](/draft/engineering-fundamentals/data-manipulation) | [Kaggle Learn: Pandas](https://www.kaggle.com/learn/pandas) | Required. Complete the course and all exercises, including selection, grouping, aggregation, and combining tabular data. |
| [Data Foundations](/draft/engineering-fundamentals/data-manipulation) | [Kaggle Learn: Data Cleaning](https://www.kaggle.com/learn/data-cleaning) | Required. Complete the course and all exercises; produce an analysis-ready dataset and explain important cleaning decisions. |
| [Data Foundations](/draft/engineering-fundamentals/data-manipulation) | [SQLTutorial.org](https://www.sqltutorial.org/) | Required. Work through the tutorial, including examples and quizzes for the SQL topics listed in this section. |
| [Data Foundations](/draft/engineering-fundamentals/data-manipulation) | [HackerRank SQL](https://www.hackerrank.com/domains/sql) | Required. Practise the Basic and Intermediate SQL challenges. |
| [Data Foundations](/draft/engineering-fundamentals/data-manipulation) | [Kaggle Learn: Data Visualization](https://www.kaggle.com/learn/data-visualization) | Required. Complete the course, including its exercises and final project; communicate findings and limitations through readable charts. |
| [Advanced SQL](/draft/engineering-fundamentals/elective-advanced-sql) | [Advanced SQL — Kaggle Learn](https://www.kaggle.com/learn/advanced-sql) | Elective resource. Complete the lessons and exercises; apply analytic functions and query-efficiency ideas. |
| [Algorithms and Problem Solving](/draft/engineering-fundamentals/elective-algorithms) | [Grokking Algorithms, Second Edition — Aditya Y. Bhargava](https://www.manning.com/books/grokking-algorithms-second-edition) | Elective resource. Study the topics used in your chosen problems. This is a paid book. |
| [Algorithms and Problem Solving](/draft/engineering-fundamentals/elective-algorithms) | [HackerRank Algorithms](https://www.hackerrank.com/domains/algorithms) | Elective resource. Select problems beyond the full required preparation kit. |
| [Bash Scripting and Automation](/draft/engineering-fundamentals/elective-bash-automation) | [LearnShell — Interactive Shell Tutorial](https://www.learnshell.org/) | Elective resource. Study variables, arguments, conditions, and loops; complete the corresponding interactive exercises. |
| [Bash Scripting and Automation](/draft/engineering-fundamentals/elective-bash-automation) | [Software Carpentry: Pipes and Filters](https://swcarpentry.github.io/shell-novice/04-pipefilter.html) | Elective resource. Complete this lesson and its exercises. |
| [Bash Scripting and Automation](/draft/engineering-fundamentals/elective-bash-automation) | [Software Carpentry: Loops](https://swcarpentry.github.io/shell-novice/05-loop.html) | Elective resource. Complete this lesson and its exercises. |
| [Bash Scripting and Automation](/draft/engineering-fundamentals/elective-bash-automation) | [Software Carpentry: Shell Scripts](https://swcarpentry.github.io/shell-novice/06-script.html) | Elective resource. Complete this lesson and adapt a script to your own workflow. |
| [Data Visualization with Seaborn and Plotly](/draft/engineering-fundamentals/elective-data-visualization) | [Intermediate Data Visualization with Seaborn — DataCamp](https://www.datacamp.com/courses/intermediate-data-visualization-with-seaborn) | Elective resource. Complete the plotting lessons and exercises relevant to your cleaned dataset. Full course access requires a subscription. |
| [Data Visualization with Seaborn and Plotly](/draft/engineering-fundamentals/elective-data-visualization) | [Introduction to Data Visualization with Plotly — DataCamp](https://www.datacamp.com/courses/introduction-to-data-visualization-with-plotly-in-python) | Elective resource. Practice interactive charts and explain chart choices. Full course access requires a subscription. |
| [GitHub Actions and CI](/draft/engineering-fundamentals/elective-github-actions) | [Hello GitHub Actions — GitHub Skills](https://github.com/skills/hello-github-actions) | Elective resource. Complete this introductory workflow exercise first. |
| [GitHub Actions and CI](/draft/engineering-fundamentals/elective-github-actions) | [Test with Actions — GitHub Skills](https://github.com/skills/test-with-actions) | Elective resource. Complete after Hello GitHub Actions; configure and inspect automated test runs. |
| [Math for AI](/draft/engineering-fundamentals/math-for-ai) | [Jon Krohn — Linear Algebra for Machine Learning](https://www.jonkrohn.com/posts/2021/5/9/linear-algebra-for-machine-learning-complete-math-course-on-youtube) | Required. Study the course sections corresponding to Units 1–5 below; complete the short exercises and accompanying Python notebooks. |
| [Math for AI](/draft/engineering-fundamentals/math-for-ai) | [Python notebooks](https://github.com/jonkrohn/ML-foundations) | Required. Run the accompanying linear algebra notebooks and complete the four notebook evidence areas below. |
| [Math for AI](/draft/engineering-fundamentals/math-for-ai) | [Khan Academy Statistics and Probability](https://www.khanacademy.org/math/statistics-probability) | Required. Complete Units 1–5 and 7–12; pass every required unit test with at least 80%. Unit 6 is excluded. The full-course challenge is not the mandatory final assessment. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Linux Journey: Command Line](https://labex.io/linuxjourney/courses/command-line) | Required. Complete the assigned lessons and practice in this section. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Python tutorial on virtual environments and packages](https://docs.python.org/3/tutorial/venv.html) | Required. Create and activate a virtual environment; install packages and record dependencies. Use the activation commands for your platform. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [JupyterLab installation guide](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html) | Required. Install JupyterLab in your project environment and select the matching notebook kernel. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [GitHub Skills](https://skills.github.com/) | Required. Complete the assigned lessons and practice in this section. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Introduction to Git](https://github.com/skills/introduction-to-git) | Required. Complete Introduction to Git, including commits, history, branches, and collaboration basics. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Introduction to GitHub](https://github.com/skills/introduction-to-github) | Required. Complete Introduction to GitHub, including branches, commits, and a pull request. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Resolve Merge Conflicts](https://github.com/skills/resolve-merge-conflicts) | Required. Complete the merge-conflict exercise and apply the workflow in your assessment repository. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Learn Git Branching](https://learngitbranching.js.org/) | Required. Covering commits, branches, merging, and remotes. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [LabEx — Code Debugging Techniques](https://labex.io/tutorials/code-debugging-techniques-132737) | Required. Tracebacks, print debugging, and the exercise |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [VS Code Python debugging tutorial](https://code.visualstudio.com/docs/python/python-tutorial#_configure-and-run-the-debugger) | Required. Breakpoints, stepping, and inspecting variables |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Week 1 challenges](https://www.hackerrank.com/interview/preparation-kits/one-month-preparation-kit/one-month-week-one/challenges) | Required. Complete this week’s challenges as part of the full four-week preparation kit. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Week 2 challenges](https://www.hackerrank.com/interview/preparation-kits/one-month-preparation-kit/one-month-week-two/challenges) | Required. Complete this week’s challenges as part of the full four-week preparation kit. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Week 3 challenges](https://www.hackerrank.com/interview/preparation-kits/one-month-preparation-kit/one-month-week-three/challenges) | Required. Complete this week’s challenges as part of the full four-week preparation kit. |
| [Terminal & Algorithmic Basics](/draft/engineering-fundamentals/terminal-algorithmic-basics) | [Week 4 challenges](https://www.hackerrank.com/interview/preparation-kits/one-month-preparation-kit/one-month-week-four/challenges) | Required. Complete this week’s challenges as part of the full four-week preparation kit. |
| [APIs, Containers & Deployment](/draft/softlanding/core-systems/apis-containers-deployment) | [APIs Explained in 6 Minutes](https://www.youtube.com/watch?v=hltLrjabkiY) | Required. Introductory API concepts. |
| [APIs, Containers & Deployment](/draft/softlanding/core-systems/apis-containers-deployment) | [How to Use FastAPI: A Detailed Python Tutorial](https://www.youtube.com/watch?v=SORiTsvnU28) | Required. Use it for the first app and endpoint examples. Check current documentation for implementation details. |
| [APIs, Containers & Deployment](/draft/softlanding/core-systems/apis-containers-deployment) | [FastAPI: Tutorial — User Guide](https://fastapi.tiangolo.com/tutorial/) | Required. Select request bodies, response models, error handling, testing, and deployment sections. |
| [APIs, Containers & Deployment](/draft/softlanding/core-systems/apis-containers-deployment) | [Docker 101 Tutorial](https://www.docker.com/101-tutorial/) | Required. Complete the runnable tutorial, then adapt it to your own service. |
| [APIs, Containers & Deployment](/draft/softlanding/core-systems/apis-containers-deployment) | [GitHub Actions: Building and testing Python](https://docs.github.com/en/actions/tutorials/build-and-test-code/python) | Required. Automate your tests on a push or pull request. Prior Engineering Fundamentals GitHub Actions practice can be reused and extended. |
| [APIs, Containers & Deployment](/draft/softlanding/core-systems/apis-containers-deployment) | [HTML, CSS, and JavaScript in 30 minutes](https://www.youtube.com/watch?v=_GTMOmRrqkU) | Further reading. For a small browser client. |
| [APIs, Containers & Deployment](/draft/softlanding/core-systems/apis-containers-deployment) | [Learn DOM Manipulation in 18 Minutes](https://www.youtube.com/watch?v=y17RuWkWdn8) | Further reading. For displaying API results in that client. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [IBM: What is machine learning?](https://www.ibm.com/think/topics/machine-learning) | Required. Introductory overview of learning, inference, and generalization. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [StatQuest: Linear Regression and Linear Models](https://www.youtube.com/playlist?list=PLblh5JKOoLUIzaEkCLIUxQFjPIlapw8nU) | Required. Study the introductory linear-regression and multiple-regression videos. Focus on model assumptions and predictions, then implement a model. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [StatQuest: Logistic Regression](https://www.youtube.com/playlist?list=PLblh5JKOoLUKxzEP5HA2d-Li7IJkHfXSe) | Required. Study the main ideas and the relationship between scores, probabilities, and classification. Detailed derivations are supporting material. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [StatQuest: Decision and Classification Trees](https://www.youtube.com/watch?v=_L39rN6gz7Y) | Required. Study split decisions and predictions, then train and evaluate a tree. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [StatQuest: Random Forests](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ) | Required. Study building, using, and evaluating a random forest, then compare it with a baseline. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [StatQuest: Support Vector Machines](https://www.youtube.com/playlist?list=PLblh5JKOoLUL3IJ4-yor0HzkqDQ3JmJkc) | Required. Study the decision-boundary and margin intuition. Detailed derivations are supporting material. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [Model Evaluation Metrics](https://www.analyticsvidhya.com/blog/2019/08/11-important-model-evaluation-error-metrics/) | Required. Use the classification section as a companion reference. Use official scikit-learn documentation for implementation. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [scikit-learn: Getting Started](https://scikit-learn.org/stable/getting_started.html) | Required. For estimators, preprocessing, pipelines, and evaluation. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [scikit-learn: Common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html) | Required. Study inconsistent preprocessing and data leakage. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [Khan Academy differential calculus](https://www.khanacademy.org/math/differential-calculus) | Required. Lessons on derivative intuition, the power rule, and the chain rule. Study slope as a local rate of change, partial-derivative intuition, gradients, and the update direction in gradient descent. Formal proofs and a complete calculus course are not required. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [Andrew Ng: Neural-network foundations](https://www.youtube.com/watch?v=CS4cs9xVecg&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=1) | Required. Study neurons, forward/backward propagation, loss, and gradient descent; use the relevant Course 1 and Course 2 sections rather than completing both courses in full. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [CS231n Winter 2016 lectures](https://www.youtube.com/playlist?list=PLkt2uSq6rBVctENoVBg1TpCC7OQi31AlC) | Required. Lectures 2, 3, and 4 on classification, optimization, and backpropagation. Use them to reinforce gaps identified during implementation. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [UvA Tutorial 2: Introduction to PyTorch](https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial2/Introduction_to_PyTorch.html) | Required. Use this as the main practical anchor. Run the notebook, then change its data or network and explain the changes. |
| [Applied ML & Deep Learning](/draft/softlanding/core-systems/applied-ml-deep-learning) | [Hugging Face LLM Course: Transformer models](https://huggingface.co/learn/llm-course/en/chapter1/1) | Required. Selected introductory sections on pipelines and transformer architectures. Run a pretrained inference example. |
| [Retrieval and RAG](/draft/softlanding/core-systems/e1-retrieval-rag) | [Sentence Transformers: Semantic Search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) | Required within this elective. Build and inspect retrieval over a small collection. |
| [Retrieval and RAG](/draft/softlanding/core-systems/e1-retrieval-rag) | [Hugging Face: Simple RAG for GitHub issues](https://huggingface.co/learn/cookbook/en/rag_zephyr_langchain) | Required within this elective. Adapt the retrieval-to-answer pattern to your documents. Choose an available model that fits your environment. |
| [Retrieval and RAG](/draft/softlanding/core-systems/e1-retrieval-rag) | [Hugging Face: RAG Evaluation](https://huggingface.co/learn/cookbook/en/rag_evaluation) | Required within this elective. Use separate retrieval and answer checks. Review a sample manually rather than relying only on an automated judge. |
| [Retrieval and RAG](/draft/softlanding/core-systems/e1-retrieval-rag) | [Hugging Face: Advanced RAG](https://huggingface.co/learn/cookbook/en/advanced_rag) | Further reading. Select a technique to investigate after your baseline works. |
| [Agents and Tool-Based Workflows](/draft/softlanding/core-systems/e2-agents-tools) | [Anthropic: Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) | Required within this elective. Focus on choosing a simple design and defining tools. |
| [Agents and Tool-Based Workflows](/draft/softlanding/core-systems/e2-agents-tools) | [Hugging Face: AI Agents Course](https://huggingface.co/learn/agents-course/en/unit0/introduction) | Required within this elective. Study Unit 1 and one relevant framework section. Adapt its examples into a bounded task. |
| [Agents and Tool-Based Workflows](/draft/softlanding/core-systems/e2-agents-tools) | [Model Context Protocol: Introduction](https://modelcontextprotocol.io/docs/getting-started/intro) | Required within this elective. Explain client/server roles and tool integration. Implement a small read-only MCP integration if it fits your project. |
| [Agents and Tool-Based Workflows](/draft/softlanding/core-systems/e2-agents-tools) | [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) | Required within this elective. Test final task outcomes as well as tool calls and traces. |
| [Model Adaptation and Experimentation](/draft/softlanding/core-systems/e3-model-adaptation) | [Hugging Face LLM Course: Fine-tuning a pretrained model](https://huggingface.co/learn/llm-course/en/chapter3/1) | Required within this elective. Follow the chapter's hands-on sequence to adapt a small model. A modest classification task is sufficient. |
| [Model Adaptation and Experimentation](/draft/softlanding/core-systems/e3-model-adaptation) | [MLflow: Experiment Tracking](https://mlflow.org/docs/latest/ml/tracking/) | Required within this elective. Record parameters, metrics, and artifacts locally. |
| [Model Adaptation and Experimentation](/draft/softlanding/core-systems/e3-model-adaptation) | [UvA Tutorial 2: Introduction to PyTorch](https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial2/Introduction_to_PyTorch.html) | Required within this elective. Revisit model structure, autograd, and training/evaluation behavior as needed. |
| [Backend Architecture and Data Systems](/draft/softlanding/core-systems/e4-backend-data) | [PostgreSQL: Tutorial](https://www.postgresql.org/docs/current/tutorial.html) | Required within this elective. Focus on tables, queries, joins, updates, foreign keys, and transactions. Extend into indexes for your own queries. |
| [Backend Architecture and Data Systems](/draft/softlanding/core-systems/e4-backend-data) | [Celery: First Steps](https://docs.celeryq.dev/en/stable/getting-started/first-steps-with-celery.html) | Required within this elective. Use the runnable worker example: implement one background task and inspect completion/failure. |
| [Backend Architecture and Data Systems](/draft/softlanding/core-systems/e4-backend-data) | [Redis: Quick Starts](https://redis.io/docs/latest/develop/get-started/) | Required within this elective. Use Python access and an expiring cache for one suitable operation. |
| [Backend Architecture and Data Systems](/draft/softlanding/core-systems/e4-backend-data) | [FastAPI: Tutorial — User Guide](https://fastapi.tiangolo.com/tutorial/) | Required within this elective. Use current reference sections for the API and dependencies around your data layer. |
| [Delivery, Monitoring, and MLOps](/draft/softlanding/core-systems/e5-delivery-mlops) | [GitHub Actions: Building and testing Python](https://docs.github.com/en/actions/tutorials/build-and-test-code/python) | Required within this elective. Extend the APIs, Containers & Deployment module's basic workflow into build/release checks appropriate to your environment. |
| [Delivery, Monitoring, and MLOps](/draft/softlanding/core-systems/e5-delivery-mlops) | [Docker 101 Tutorial](https://www.docker.com/101-tutorial/) | Required within this elective. Reuse image-building skills and apply explicit release tags. |
| [Delivery, Monitoring, and MLOps](/draft/softlanding/core-systems/e5-delivery-mlops) | [OpenTelemetry Python: Getting Started by Example](https://opentelemetry.io/docs/languages/python/getting-started/) | Required within this elective. Instrument a small service and inspect a request trace. |
| [Delivery, Monitoring, and MLOps](/draft/softlanding/core-systems/e5-delivery-mlops) | [MLflow: Experiment Tracking](https://mlflow.org/docs/latest/ml/tracking/) | Required within this elective. Connect model artifacts and evaluation results to a versioned run. LLM projects can instead version their prompts/configuration and evaluation results. |
| [LLM Applications](/draft/softlanding/core-systems/llm-applications) | [Karpathy: Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) | Required. Focus on training/inference, model behavior, and limitations. |
| [LLM Applications](/draft/softlanding/core-systems/llm-applications) | [Karpathy: How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw) | Required. Selected examples of task framing and practical use. Apply one pattern and evaluate the result. |
| [LLM Applications](/draft/softlanding/core-systems/llm-applications) | [Hugging Face: Structured Outputs](https://huggingface.co/docs/inference-providers/guides/structured-output) | Required. Study JSON schemas and validation. Use one model/provider that supports your chosen setup. |
| [LLM Applications](/draft/softlanding/core-systems/llm-applications) | [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) | Required. Use the introductory evaluation concepts: test inputs, success criteria, grading, and regression checks. Advanced agent sections support the Agents and Tool-Based Workflows elective. |
| [Software Engineering for AI](/draft/softlanding/core-systems/software-engineering) | [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.oreilly.com/library/view/clean-code/9780136083238/) | Further reading. If access is available. Focus on chapters 2, 3, 4, 7, and 9 for naming, functions, comments, error handling, and tests. Free resources below support the required practice. |
| [Software Engineering for AI](/draft/softlanding/core-systems/software-engineering) | [uv: Working on projects](https://docs.astral.sh/uv/guides/projects/) | Required. Create a project, add dependencies, and run it in a reproducible environment. |
| [Software Engineering for AI](/draft/softlanding/core-systems/software-engineering) | [pytest: Get Started](https://docs.pytest.org/en/stable/getting-started.html) | Required. Write tests and assertions, then use fixtures where shared setup is needed. |
| [Software Engineering for AI](/draft/softlanding/core-systems/software-engineering) | [GitHub: Reviewing and testing AI-generated suggestions](https://docs.github.com/en/copilot/responsible-use/inline-suggestions) | Required. Focus on intended uses, limitations, and verification. Apply the principles to your available coding assistant. |
| [Software Engineering for AI](/draft/softlanding/core-systems/software-engineering) | [LeetCode: Programming Skills](https://leetcode.com/studyplan/programming-skills/) | Further reading. For specific implementation gaps. This does not replace the project task. |
| [Systems, Networking & Data](/draft/softlanding/core-systems/systems-networking-data) | [NetworkChuck: Networking series](https://www.youtube.com/playlist?list=PLIhvC56v63IJVXv0GJcl9vO5Z6znCVb1P) | Required. Introductory videos 1–3 on networks, switches, and routers. |
| [Systems, Networking & Data](/draft/softlanding/core-systems/systems-networking-data) | [NetworkChuck: What is an IP address?](https://www.youtube.com/watch?v=5WfiTHiU4x8) | Required. Understand address basics, then practice public/private address identification and simple CIDR examples. |
| [Systems, Networking & Data](/draft/softlanding/core-systems/systems-networking-data) | [SSH Keys](https://www.youtube.com/watch?v=dPAw4opzN9g) | Required. Understand keys and authentication. Practice remote access in an assigned environment. |
| [Systems, Networking & Data](/draft/softlanding/core-systems/systems-networking-data) | [MIT Missing Semester: Command-line Environment](https://missing.csail.mit.edu/2020/command-line/) | Required. Use job control and remote machines sections, including exercises. |
| [Systems, Networking & Data](/draft/softlanding/core-systems/systems-networking-data) | [MDN: Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) | Required. For requests, responses, headers, and the client/server relationship. |
| [Systems, Networking & Data](/draft/softlanding/core-systems/systems-networking-data) | [Cloudflare: What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/) | Required. For DNS resolution; inspect a lookup and relate it to an HTTP request. |
| [Systems, Networking & Data](/draft/softlanding/core-systems/systems-networking-data) | [Python sqlite3 tutorial](https://docs.python.org/3/library/sqlite3.html) | Required. Create a runnable database exercise: create a local database, insert/query records with parameters, and commit a transaction. |
