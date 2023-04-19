import React from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import { Context } from '@ckeditor/ckeditor5-core';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';

import { myPlugins, REDUCED_MATERIAL_COLORS } from './EditorConfig';

const Editor: React.FC = () => {
  //   const [content, setContent] = useState('');

  const editorConfiguration = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'highlight',
        '|',
        'alignment',
        'indent',
        'outdent',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'link',
        'blockquote',
        'insertTable',
        'mediaEmbed',
        '|',
        'undo',
        'redo',
        '|',
        'fontColor',
        'fontSize',
        'fontFamily',
        'code',
        'codeBlock',
      ],
    },
    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative',
      ],
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    language: 'en',
  };

  return (
    <div>
      <CKEditorContext context={Context}>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          config={{
            plugins: myPlugins,
            toolbar: {
              items: [
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'highlight',
                '|',
                'alignment',
                'indent',
                'outdent',
                '|',
                'bulletedList',
                'numberedList',
                '|',
                'link',
                'blockquote',
                'insertTable',
                'mediaEmbed',
                '|',
                'undo',
                'redo',
                '|',
                'fontColor',
                'fontSize',
                'fontFamily',
                'code',
                'codeBlock',
              ],
            },
          }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </CKEditorContext>
    </div>
  );
};

export default Editor;
