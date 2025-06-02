import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Links } from './Links'
import { usePageStore } from '@/store/store'
import { InfoLinks } from '@/interfaces'

export const LinksInformation = () => {
    const { infoLinks, setInfoLink, setInfoLinksArray } = usePageStore()
    const handleAddSocial = () => {
        //hacer copia del original evitar mutar original
        const socialSort = [...infoLinks].sort((a, b) => a.id - b.id);

        const ultimoRegistro = socialSort[socialSort.length - 1];
        const newId = ultimoRegistro ? ultimoRegistro.id + 1 : 1;

        const newRegistro: InfoLinks = {
            id: newId,
            idColor: 'Blue',
            linkTitle: 'New Link',
            url: 'http://example.com'
        }
        setInfoLink(newRegistro)
    };
    const handleLinkTitleChange = (itemNew: InfoLinks) => {
        const updatedLinks = infoLinks.map((item) =>
            item.id === itemNew.id
                ? { ...item, idColor: itemNew.idColor, linkTitle: itemNew.linkTitle, url: itemNew.url }
                : item
        );
        setInfoLinksArray(updatedLinks);
    };

      const handleDeleteSocial = (itemId: number) => {
        const updatedLinks = infoLinks.filter((item) => item.id !== itemId);
        setInfoLinksArray(updatedLinks);
      };
    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className="font-bold text-2xl">Your Links</h1>
                    <p className="text-[#9fa3a5] mb-3">
                        Add and customize your links.
                    </p>
                </div>

                <button className='flex items-center gap-5 px-2 py-3 bg-black text-white rounded font-bold cursor-pointer' onClick={handleAddSocial}>
                    <BiPlus size={20} />
                    Add Link
                </button>

            </div>

            {
                infoLinks.map((link) => (
                    <Links key={link.id} linkTitle={link.linkTitle} url={link.url} id={link.idColor} onInputTitle={(value) => handleLinkTitleChange({
                        id: link.id,
                        idColor: link.idColor,
                        linkTitle: value,
                        url: link.url
                    })} onInputUrl={(value) => handleLinkTitleChange({
                        id: link.id,
                        idColor: link.idColor,
                        linkTitle: link.linkTitle,
                        url: value
                    })} onSelectedColor={(value) => handleLinkTitleChange({
                        id: link.id,
                        idColor: value,
                        linkTitle: link.linkTitle,
                        url: link.url
                    })}  onRemove={() => handleDeleteSocial(link.id)}/>
                ))
            }
        </>
    )
}
