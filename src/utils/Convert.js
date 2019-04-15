import BigInt from 'big-integer';
// var bigint = require( 'big-integer' )

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();
const numbers = '0123456789'
const ig_alphabet =  upper + lower + numbers + '-_'
const bigint_alphabet = numbers + lower



export function toShortcode( longid )
{
	var o = BigInt( longid ).toString( 64 )
	return o.replace(/<(\d+)>|(\w)/g, (m,m1,m2) =>
	{
		return ig_alphabet.charAt( ( m1 )
		  ? parseInt( m1 ) 
		  : bigint_alphabet.indexOf( m2 ) )
	});
}

export function fromShortcode( shortcode )
{
	var o = shortcode.replace( /\S/g, m =>
	{
		var c = ig_alphabet.indexOf( m )
		var b = bigint_alphabet.charAt( c ) 
		return ( b != "" ) ? b : `<${c}>`
	} )	
	return BigInt( o, 64 ).toString( 10 )
}