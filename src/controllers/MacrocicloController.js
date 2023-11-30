
function index (req, res) {
    res.send('macrociclos/index')
    }

function create (req, res) {
  res.send('macrociclos/create')
}


module.exports = {
    create: create,
    index: index,

}