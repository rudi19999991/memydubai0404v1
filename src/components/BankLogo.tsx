
import React from 'react';

interface BankLogoProps {
  bank: string;
  className?: string;
}

const BankLogo: React.FC<BankLogoProps> = ({ bank, className = "" }) => {
  const getBankLogo = () => {
    switch(bank.toLowerCase()) {
      case 'emirates nbd':
        return 'https://banner2.cleanpng.com/20180617/ssv/aa6u3a670.webp';
      case 'adcb':
        return 'https://arabmls.org/wp-content/uploads/2024/04/Abu_Dhabi_Commercial_Bank_logo.svg.png';
      case 'dib':
        return 'https://cdn.freelogovectors.net/wp-content/uploads/2020/03/dubai-islamic-bank-logo-180x180.png';
      case 'mashreq bank':
 	return 'https://static.wixstatic.com/media/afe8e2_672ae92298fc4e4fa06fa6d0fd11d426~mv2.png/v1/fill/w_320,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mashreq.png';
      case 'mashreq':
        return 'https://static.wixstatic.com/media/afe8e2_672ae92298fc4e4fa06fa6d0fd11d426~mv2.png/v1/fill/w_320,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mashreq.png';
      case 'rakbank':
        return 'https://timg1cf.b8cdn.com/images/templates/rak_bank/rak_bank-logo-share-en.png?vid=25';
      case 'hsbc':
        return 'https://www.veryicon.com/download/png/internet--web/payment-method/hsbc-bank-1?s=256';
      case 'enbd - islamic banking':
        return 'https://banner2.cleanpng.com/20180617/ssv/aa6u3a670.webp';
      default:
        return 'https://placeholder.pics/svg/200x100/DEDEDE/555555/Bank%20Logo';
    }
  };

  return (
    <div className={`flex items-center justify-center bg-white p-2 rounded-md ${className}`}>
      <img 
        src={getBankLogo()} 
        alt={`${bank} logo`}
        className="h-6 object-contain max-w-full"
      />
    </div>
  );
};

export default BankLogo;
