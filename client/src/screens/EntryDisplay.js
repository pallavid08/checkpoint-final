import './Entry.css';

const EntryDisplay = ({ key, item1, item2 }) => {
   return (
      <div className="entry-single-box">
         <div>
            <h4>{item1}</h4>
         </div>
         <hr />
         <div className="description-box">
            <p>{item2}</p>
         </div>
      </div>
   );
};

export default EntryDisplay;
