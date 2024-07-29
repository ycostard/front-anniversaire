import { useState, useRef } from 'react';
const birthdayApiService = require('../../services/birthdayApiService');
const swal = require('sweetalert2');

// Send file to api 
const handleImport = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  birthdayApiService.importQuotes(formData)
    .then((result) => {
      console.log(result);
      if (result) {
        if(result.count) {
          swal.fire({
            icon: 'success',
            title: 'Success',
            text: `${result.count} birthdays imported successfully`,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#579FF4',
          });
        } else {
          swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to import birthdays',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#579FF4',
          });
        }
      }
    })
    .catch((error) => {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to import birthdays',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#579FF4',
      });
    });
}

function ImportQuotes(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="pt-44 h-screen" style={{ background: props.currentColor }}>
      <div className='card card-compact w-1/2 mx-auto shadow-xl my-4 p-2 rounded-md'>
        <h1 className='text-2xl font-bold text-center'>Import Quotes</h1>
        <p className='text-center text-sm'>Import Quotes from a CSV file</p>
        <p className='text-center text-sm'>CSV file should have columns: quote, author</p>
        <div className='flex justify-center my-4'>
          <input 
            type='file' 
            accept='.csv' 
            ref={fileInputRef} 
            onChange={handleFileChange}
          />
        </div>
        <div className='flex justify-center my-2'>
          <button 
            className="btn btn-primary bg-blue-500 rounded-md p-2 text-white" 
            onClick={() => handleImport(selectedFile)}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImportQuotes;