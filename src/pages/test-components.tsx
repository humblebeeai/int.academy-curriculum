import React from 'react';
import Layout from '@theme/Layout';
import {
    ModuleProgress,
    ChecklistItem,
    ResourceCard,
    TimeEstimate,
    SkillShowcase,
    LearningPath,
    ConceptMap
} from '../components';
import CodeComparison from '../components/CodeComparison';
import DifficultyTag from '../components/DifficultyTag';

export default function TestComponents() {
    return (
        <Layout title="Component Library Test" description="Verifying new components">
            <main className="container margin-vert--lg">
                <h1>Component Library Verification</h1>

                <section className="margin-bottom--xl">
                    <h2>1. Module Progress & Persistence</h2>
                    <p>This bar should fill up as you check items below. Reload page to verify persistence.</p>
                    <ModuleProgress
                        moduleId="test-module-1"
                        title="Module 1: Foundations"
                        totalItems={3}
                        phase={1}
                    />

                    <div className="card p-4">
                        <h3>Checklist Items</h3>
                        <ChecklistItem id="step-1" moduleId="test-module-1">
                            <strong>Step 1:</strong> Read the documentation
                        </ChecklistItem>
                        <ChecklistItem id="step-2" moduleId="test-module-1">
                            <strong>Step 2:</strong> Install dependencies
                        </ChecklistItem>
                        <ChecklistItem id="step-3" moduleId="test-module-1">
                            <strong>Step 3:</strong> Run the code
                        </ChecklistItem>
                    </div>
                </section>

                <section className="margin-bottom--xl">
                    <h2>2. Learning Path</h2>
                    <LearningPath
                        currentModuleId="mod-2"
                        modules={[
                            { id: 'mod-1', title: 'Computational Thinking' },
                            { id: 'mod-2', title: 'Calculus & Algebra' },
                            { id: 'mod-3', title: 'Probability' },
                            { id: 'mod-4', title: 'Data Engineering' }
                        ]}
                    />
                </section>

                <section className="margin-bottom--xl">
                    <h2>3. Resource Cards</h2>
                    <div className="row">
                        <div className="col col--6">
                            <ResourceCard
                                title="Gradient Descent Visualization"
                                type="video"
                                url="#"
                                description="A clear visual explanation of how neural networks learn."
                                duration="15 min"
                                difficulty="beginner"
                                id="res-1"
                                moduleId="test-module-1"
                            />
                        </div>
                        <div className="col col--6">
                            <ResourceCard
                                title="PyTorch Documentation"
                                type="documentation"
                                url="#"
                                description="Official docs for tensors and autograd."
                                difficulty="intermediate"
                            />
                        </div>
                    </div>
                </section>

                <section className="margin-bottom--xl">
                    <h2>4. Time Estimate</h2>
                    <TimeEstimate
                        minHours={10}
                        maxHours={15}
                        breakdownBy={{ "Reading": 5, "Coding": 10 }}
                    />
                </section>

                <section className="margin-bottom--xl">
                    <h2>5. Skill Showcase & Difficulty Tags</h2>
                    <DifficultyTag level="Beginner" time="2h">Intro</DifficultyTag>
                    <DifficultyTag level="Advanced" time="4h">Deep Dive</DifficultyTag>

                    <SkillShowcase
                        skills={[
                            { iconString: "Terminal", title: "CLI", description: "Navigate file systems." },
                            { iconString: "Github", title: "Git", description: "Version control." },
                            { iconString: "Database", title: "SQL", description: "Querying data." }
                        ]}
                    />
                </section>

                <section className="margin-bottom--xl">
                    <h2>6. Code Comparison</h2>
                    <CodeComparison
                        before="print('hello')"
                        after="logging.info('hello')"
                        titleA="Bad Practice"
                        titleB="Best Practice"
                    />
                </section>

                <section className="margin-bottom--xl">
                    <h2>7. Concept Map</h2>
                    <ConceptMap
                        concepts={[
                            { id: 'A', name: 'Algebra', type: 'prerequisite' },
                            { id: 'B', name: 'Gradients', type: 'current' },
                            { id: 'C', name: 'Backprop', type: 'advanced' }
                        ]}
                        connections={[
                            { from: 'A', to: 'B' },
                            { from: 'B', to: 'C' }
                        ]}
                    />
                </section>

            </main>
        </Layout>
    );
}
