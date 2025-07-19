import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #f0f7ff, #ffffff); /* Very light blue to white */
  border-radius: 12px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 2.5rem;
  background-color: #1a73e8; /* Google Blue */
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  color: #e3f2fd; /* Very light blue for description */
`;

const AlgorithmsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const AlgorithmCard = styled.div`
  background: #ffffff; /* Pure white card background */
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: ${props => props.comingSoon ? 'not-allowed' : 'pointer'};
  position: relative;
  opacity: ${props => props.comingSoon ? 0.6 : 1};
  border: 1px solid #e0e0e0; /* Light border for cards */

  &:hover {
    transform: ${props => !props.comingSoon && 'translateY(-10px)'};
    box-shadow: ${props => !props.comingSoon && '0 10px 20px rgba(0, 0, 0, 0.15)'};
  }
`;

const CardTitle = styled.h2`
  color: #2c3e50; /* Dark blue-grey for card titles */
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #5d6d7e; /* Medium blue-grey for card descriptions */
  line-height: 1.6;
`;

const Complexity = styled.div`
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px dashed #dbe3ed; /* Dashed light border */
  font-size: 0.95rem;
  color: #7f8c8d; /* Grey for complexity text */
`;

const CategoryTitle = styled.h2`
  font-size: 2.2rem;
  color: #1a73e8; /* Matching header blue for category titles */
  margin: 3rem 0 1.5rem;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #a8d6ff; /* Light blue underline */
  padding-bottom: 0.5rem;
`;

const ComingSoonBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4d4d; /* Bright red for coming soon */
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const algorithmCategories = [
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    algorithms: [
      {
        id: 'bubble',
        name: 'Bubble Sort',
        description: 'A fundamental sorting algorithm, excellent for understanding basic concepts by repeatedly stepping through the list.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        path: '/bubble-sort'
      },
      {
        id: 'quick',
        name: 'Quick Sort',
        description: 'Highly efficient and widely used, based on the divide-and-conquer strategy, often the fastest in practice.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(log n)',
        path: '/quick-sort'
      },
      {
        id: 'merge',
        name: 'Merge Sort',
        description: 'A stable and efficient algorithm, ideal for large datasets and external sorting, using a divide-and-conquer approach.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        path: '/merge-sort'
      },
      {
        id: 'insertion',
        name: 'Insertion Sort',
        description: 'Simple to implement and efficient for small arrays or nearly sorted data, building the final sorted array one item at a time.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        path: '/insertion-sort'
      },
      {
        id: 'selection',
        name: 'Selection Sort',
        description: 'A straightforward but less efficient for larger lists, finding the minimum element from the unsorted part and putting it at the beginning.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        path: '/selection-sort'
      }
    ]
  },
  {
    id: 'math',
    title: 'Mathematical Algorithms',
    algorithms: [
      {
        id: 'factorial',
        name: 'Factorial Calculator',
        description: 'Uncover the magic of factorial calculations with engaging visualizations, showing step-by-step product accumulation.',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n) (for recursive stack)',
        path: '/factorial'
      },
      {
        id: 'fibonacci',
        name: 'Fibonacci Sequence',
        description: 'Journey through the elegant patterns of the Fibonacci sequence generation, revealing its recursive beauty.',
        timeComplexity: 'O(n) (iterative)',
        spaceComplexity: 'O(1) (iterative)',
        path: '/fibonacci'
      }
     
    ]
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Header>
        <Title>Explore Algorithms Like Never Before!</Title>
        <Description>
          Dive into the core concepts of computer science. Our platform offers stunning, step-by-step visualizations, clear explanations, and hands-on experiences to demystify complex algorithms. Start your learning adventure today!
        </Description>
      </Header>

      {algorithmCategories.map((category) => (
        <div key={category.id}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <AlgorithmsGrid>
            {category.algorithms.map((algo) => (
              <AlgorithmCard 
                key={algo.id}
                onClick={() => !algo.comingSoon && navigate(algo.path)}
                comingSoon={algo.comingSoon}
              >
                <CardTitle>{algo.name}</CardTitle>
                <CardDescription>{algo.description}</CardDescription>
                <Complexity>
                  <div>**Time Complexity:** {algo.timeComplexity}</div>
                  <div>**Space Complexity:** {algo.spaceComplexity}</div>
                </Complexity>
                {algo.comingSoon && (
                  <ComingSoonBadge>Coming Soon</ComingSoonBadge>
                )}
              </AlgorithmCard>
            ))}
          </AlgorithmsGrid>
        </div>
      ))}
    </HomeContainer>
  );
}

export default Home;