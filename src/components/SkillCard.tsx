import styled from 'styled-components';

interface SkillCardProps {
  title: string;
}

const SkillCard = ({ title }: SkillCardProps) => {
  const source = (data as Record<string, string | undefined>)[title] ?? null;

  return (
    <Card noSource={!source}>
      {source && <SkillImage src={source} alt={title} />}
      <SkillLabel noSource={!source}>{title}</SkillLabel>
    </Card>
  );
};

const data = {
  'Computer Vision': '',
  'Monte Carlo Tree Search': '',
  'MCTS': '',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C': 'https://devicon-website.vercel.app/api/c/original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'MATLAB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg',
  'Julia': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg',
  'R': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'scikit-learn': 'https://cdn.simpleicons.org/scikitlearn',
  'Pandas': 'https://cdn.simpleicons.org/pandas',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'GitLab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'IntelliJ': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
  'Trello': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
  'Slack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
};

const Card = styled.div<{ noSource: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  margin-bottom: 1rem;
  padding: 0.3em 0.6em;
  border-radius: 1rem;
  background-color: ${({ noSource }) => (noSource ? 'black' : 'transparent')};
`;

const SkillImage = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
`;

const SkillLabel = styled.span<{ noSource: boolean }>`
  color: white;
  font-size: 2.1rem;
  font-weight: 500;
  white-space: nowrap;
  padding: ${({ noSource }) => (noSource ? '0.3em 0.6em' : '0')};
`;

export default SkillCard;
