import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [area, setArea] = useState(0);
  const [style, setStyle] = useState('modern');
  const [services, setServices] = useState({
    lighting: false,
    furniture: false,
    planning: false,
    materials: false,
    supervision: false
  });


  useEffect(() => {
    calculateTotal();
  }, [area, style, services]);

  const calculateTotal = () => {
    const basePrice = area * 2500;
    const styleMultiplier = {
      modern: 1,
      classic: 1.2,
      luxury: 1.5
    }[style];

    const servicePrices = {
      lighting: 10000,
      furniture: 10000,
      planning: 15000,
      materials: 20000,
      supervision: 25000
    };

    const activeServices = Object.entries(services)
      .filter(([_, value]) => value)
      .map(([key]) => servicePrices[key]);

    const servicesTotal = activeServices.reduce((acc, cur) => acc + cur, 0);
    
    return Math.round(basePrice * styleMultiplier + servicesTotal);
  };

  return (
    
    <div className="container my-5">
          <Link to="/" className="btn btn-outline-secondary mb-4">
        ← Вернуться на главную
      </Link>
      <h1>Калькулятор проекта</h1>
      
  
      <div className="mb-3">
        <label>Площадь помещения (м²):</label>
        <input 
          type="number" 
          className="form-control"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
        />
      </div>

    
      <div className="mb-3">
        <label>Стиль оформления:</label>
        <select 
          className="form-select"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option value="modern">Модерн</option>
          <option value="classic">Классика</option>
          <option value="luxury">Люкс</option>
        </select>
      </div>

   
      <div className="mb-3 ">
        <h5>Дополнительные услуги:</h5>
        {Object.entries(services).map(([key, value]) => (
          <div className="form-check" key={key}>
            <input
              type="checkbox"
              className="form-check-input"
              id={key}
              checked={value}
              onChange={(e) => setServices(prev => ({
                ...prev,
                [key]: e.target.checked
              }))}
            />
            <label className="form-check-label" htmlFor={key}>
              {{
                lighting: 'Проектирование освещения (+10 000₽)',
                furniture: 'Подбор мебели (+10 000₽)',
                planning: 'Планировка помещений (+15 000₽)',
                materials: 'Подбор материалов (+20 000₽)',
                supervision: 'Авторский надзор (+25 000₽)'
              }[key]}
            </label>
          </div>
        ))}
      </div>

   
      <div className="mt-4">
        <h3>Итоговая стоимость: {calculateTotal().toLocaleString()}₽</h3>
      </div>

    </div>
  );
};

export default Calculator;