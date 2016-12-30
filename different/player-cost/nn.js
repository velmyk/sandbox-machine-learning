const
	synaptic = require('synaptic');

const
	testSet = require('./data/test.json'),
	trainingSet = require('./data/train.json');

const
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer;

const
	inputLayer = new Layer(190),
	hiddenLayer = new Layer(100),
	outputLayer = new Layer(12);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

const trainer = new Trainer(myNetwork);

trainer.train(trainingSet, {
    rate: .1,
    iterations: 20,
    error: .1,
    shuffle: true,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});

test();

function test () {
	testSet.forEach(item => {
		console.log(myNetwork.activate(item.input));
		console.log(item.output);
	})
}

