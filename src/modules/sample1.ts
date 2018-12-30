// import sample2 from './sample2' // エラー出ない
// import sample2 from 'src/modules/sample2' // エラー出ない
import sample2 from '~/modules/sample2' // エラー出る

export default function sample1(): string {
    console.log('sample1.ts passed!')
    sample2()
    return 'sample1'
}