import './CreditCard.css';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div className='creditCard' style={{
            backgroundColor: bgColor, color: color
        }}>
            <p>{type}</p>
            <p>********{number.slice(-4)}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard