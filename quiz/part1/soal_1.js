let nama = '',
	role = '';

if (nama.length <= 0 || nama === '') return console.log('Nama wajib di isi!');

switch (role) {
	case 'Ksatria':
		console.log(
			`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`
		);
		break;
	case 'Tabib':
		console.log(
			`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`
		);
		break;
	case 'Penyihir':
		console.log(
			`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
		);
		break;
	default:
		console.log(
			'tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada'
		);
}
