import TitleBar from '../common/TitleBar/TitleBar';
import './startProject.scss';
import Form from './ui/Form';

const StartProject = () => {
  return (
    <div className='startProject'>
      <TitleBar title={'Start A Project'} />
      <Form />
    </div>
  )
}

export default StartProject