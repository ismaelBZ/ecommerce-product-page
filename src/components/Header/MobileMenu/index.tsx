import {useState, useEffect} from 'react';
import Close from './../../../assets/icons/close.svg';


const MobileMenu = ({setIsMenuActive} : {setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [appHeight, setAppHeight] = useState('0px');
  
  /* Atualizaa a altura do menu */
  const handleMenuHeight = () => {
    setAppHeight(() => window.getComputedStyle(document.body, null).getPropertyValue('height'));
  }
  
  /* Esconde o menu ao clicar no background */
  const handleMenuOnBackgroundClick = (e: MouseEvent) => {
    if (e.target == document.getElementById('menuBackground')) {
      setIsMenuActive(false);
    }
  }

  useEffect(() => {
    
    /* Atualiza a altura do menu na renderizacao inicial */
    handleMenuHeight();
    /* Adiciona o evento para atualizar a altura do menu em futuras interacoes */
    window.addEventListener('resize', handleMenuHeight);

    /* Adiciona o evento para esconder o menu ao clicar no background */
    window.addEventListener('click', handleMenuOnBackgroundClick);

    return () => {
      window.removeEventListener('resize', handleMenuHeight);
      window.removeEventListener('click', handleMenuOnBackgroundClick);
    } 

  }, [])


  return (
    <div id='menuBackground' style={{height: `${appHeight}` }} className={`absolute top-0 left-0 z-10 w-full bg-[rgba(0,0,0,0.5)] md:hidden`}>
        <div className='w-[50%] max-w-80 min-w-48 h-full p-6 bg-white '>
          <button onClick={() => setIsMenuActive(() => false)}>
            <img src={Close} alt='Close menu' />
          </button>
          <nav className='mt-12'>
            <ul className='flex flex-col gap-5'>
                <li className='font-bold'>Collections</li>
                <li className='font-bold'>Men</li>
                <li className='font-bold'>Women</li>
                <li className='font-bold'>About</li>
                <li className='font-bold'>Contact</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}
export default MobileMenu