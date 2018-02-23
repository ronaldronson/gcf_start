/**
 * Google Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloGET = (req, res) => {
  res.send(
    Object.keys(req).reduce((acc, key) => { 
    	"object" !== typeof req[key] && (acc[key] = req[key])
	return acc
    }, {})
  );
};

/** @var let function shared */
let i = 0;

/**
 * Google Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloCounter = (req, res) => res.send({ count: i++ });

