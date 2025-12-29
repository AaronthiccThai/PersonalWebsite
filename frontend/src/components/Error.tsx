type Error = {
  message?: string;
};

const Error: React.FC<Error> = ({ message }) => {
  if (!message) return null;

  return (
    <p className="text-red-500 text-sm mt-1">
      {message}
    </p>
  );
};

export default Error;
