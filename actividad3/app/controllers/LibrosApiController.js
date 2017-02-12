var Libro = require('../models/Libro');

module.exports = {
	index: function(req,res)
	{
		Libro.find(function(err,doc){
			// res.setHeader('Content-Type','aplication/json');

			if(err)
			{
				res.statusCode = 500;
				res.send(err);
			}
			else
			{
				res.statusCode = 200;
				res.send(JSON.stringify({
					errors: false,
					data: doc
				}));
			}
		});
	},
	show: function(req,res)
	{
		// res.setHeader('Content-Type','aplication/json');
		var id = req.params.id;

		if (id.match(/^[0-9a-fA-F]{24}$/))
		{
			Libro.findById(id,function(err,doc){
				if(err)
				{
					res.statusCode = 500;
					res.send(err);
				}
				else
				{
					res.statusCode = 200;
					res.send(JSON.stringify({
						errors: false,
						data: doc
					}));
				}
			});
		}
		else
		{
			res.statusCode = 500;
			res.send(JSON.stringify({
				errors: {
					id: {
						message: 'El ID proporcionado no es válido'
					}
				}
			}));
		}
	},
	store: function(req,res)
	{
		var libroObj = new Libro(req.body);

		libroObj.save(function(err,doc){
			res.setHeader('Content-Type','aplication/json');

			if(err)
			{
				res.statusCode = 500;
				res.send(err);
			}
			else
			{
				res.statusCode = 200;
				res.send(JSON.stringify({
					errors: false,
					data: doc
				}));
			}

		});
	},
	update: function(req,res)
	{
		res.setHeader('Content-Type','aplication/json');
		var id = req.params.id;

		if (id.match(/^[0-9a-fA-F]{24}$/))
		{
			Libro.findByIdAndUpdate(id,req.body,function(err,doc){
				if(err)
				{
					res.statusCode = 500;
					res.send(err);
				}
				else
				{
					Libro.findById(id,function(err,doc){
						res.statusCode = 200;
						res.send(JSON.stringify({
							errors: false,
							data: doc
						}));
					});
				}
			});
		}
		else
		{
			res.statusCode = 500;
			res.send(JSON.stringify({
				errors: {
					id: {
						message: 'El ID proporcionado no es válido'
					}
				}
			}));
		}
	},
	destroy: function(req,res)
	{
		res.setHeader('Content-Type','aplication/json');
		var id = req.params.id;

		if (id.match(/^[0-9a-fA-F]{24}$/))
		{
			Libro.findByIdAndRemove(id,function(err,doc){
				if(err)
				{
					res.statusCode = 500;
					res.send(err);
				}
				else
				{
					res.statusCode = 200;
					res.send(JSON.stringify({
						errors: false,
						data: doc
					}));
				}
			});
		}
		else
		{
			res.statusCode = 500;
			res.send(JSON.stringify({
				errors: {
					id: {
						message: 'El ID proporcionado no es válido'
					}
				}
			}));
		}
	}
};