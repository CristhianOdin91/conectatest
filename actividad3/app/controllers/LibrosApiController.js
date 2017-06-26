var Libro = require('../models/Libro');

module.exports = {
	index: (req,res) =>
	{
		Libro.find().then(
			libros => {
				if(!Boolean(libros))
					return res.status(404).json({ message: 'No se encontraron libros' });

				res.json(libros);
			},
			error => res.status(500).json({ error })
		);
	},
	show: (req,res) =>
	{
		Libro.findById(req.params.id).then(
			libro => {
				if(!Boolean(libro))
					return res.status(404).json({ message: 'No se encontraron libros' });

				res.json(libro);
			},
			error => {
				if(error.name == 'CastError')
					return res.status(404).json({ message: 'No se encontraron libros' });
					// return res.status(400).json({ message: 'El ID proporcionado no es válido' });

				res.status(500).json({ error }) 
			}
		);
	},
	store: (req,res) =>
	{
		Libro(req.body).save().then(
			libro => res.status(201).json(libro),
			error => res.status(500).json({ error })
		);
	},
	update: (req,res) =>
	{
		Libro.findByIdAndUpdate(req.params.id,req.body).then(
			libro => {
				if(!Boolean(libro))
					return res.status(404).json({ message: 'No se encontraron libros' });

				Libro.findById(req.params.id).then(
					upLibro => res.json(upLibro),
					error => res.status(500).json({ error })
				);
			},
			error => {
				if(error.name == 'CastError')
					return res.status(404).json({ message: 'No se encontraron libros' });

				res.status(500).json({ error }) 
			}
		);
	},
	destroy: (req,res) =>
	{
		Libro.findByIdAndRemove(req.params.id).then(
			libro => {
				if(!Boolean(libro))
					return res.status(404).json({ message: 'No se encontraron libros' });

				res.json(libro);
			},
			error => {
				if(error.name == 'CastError')
					return res.status(404).json({ message: 'No se encontraron libros' });

				res.status(500).json({ error }) 
			}
		);
	}
};