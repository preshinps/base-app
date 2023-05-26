import useAppState from '../../../hooks/useAppState';

type Props = any | undefined

const Home = (props: Props) => {
    const appState = useAppState();

    console.log("STATEEEE", appState);
    
  return (
    <div>Home</div>
  )
}

export default Home